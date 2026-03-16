import { create } from "zustand";

import { profileList } from "@/lib/profiles.config.js";
import { getRoute, sendReport, sendGPS } from "@/lib/api.js";
import { postprocessRoute } from "@/lib/data.utils";
import { screenshotMapById } from "@/lib/map.utils.js";

import { useCookieStore } from "./useCookieStore";

export let useStore = create((set, get) => ({
    prevSession: null,
    selectedProfile: null,
    prevProfile: null,
    selectedProfileId: 0,
    mainColor: "#000000",
    stats: {},
    alerts: {},
    isRouteLoading: false,

    pathGPS: [],

    bbox: null,
    page: "landing",
    subpage: "desc",

    markers: [],

    setNextColor: () => {
        const colors = get().colors;
        const profile = get().profile;

        const colorKeys = Object.keys(colors);
        const currentIndex = colorKeys.indexOf(profile);
        const nextIndex = (currentIndex + 1) % colorKeys.length;
        const nextProfile = colorKeys[nextIndex];
        const nextColor = colors[nextProfile];
        set({ profile: nextProfile, mainColor: nextColor });
    },

    // setMarkers: (newMarker, idx = get().markers.length >= 1 ? 1 : 0) => {
    setMarkers: (newMarker, idx = null) => {
        const prevMarkers = get().markers;
        const calcRoute = get().calcRoute;
        const setModal = get().setModal;

        let newMarkers = [];

        // // Keep origin fixed at click
        // if (idx == null ) {
        //     newMarker.idx = prevMarkers.length < 2 ? 1 : 0;
        //     newMarkers =
        //         prevMarkers.length < 2
        //             ? [...prevMarkers, newMarker]
        //             : [newMarker];
        // } else {
        //     newMarker.idx = idx;
        //     prevMarkers[idx] = { ...newMarker };
        //     newMarkers = [...prevMarkers];
        // }

        // Origin gets updated at 3rd click
        if (idx == null) {
            const newIdx = prevMarkers.length % 2;
            if (newIdx == 0) {
                newMarkers = [{ ...newMarker, idx: newIdx }];
            } else {
                newMarkers = [...prevMarkers, { ...newMarker, idx: newIdx }];
            }
        } else {
            newMarker.idx = idx;
            prevMarkers[idx] = { ...newMarker };
            newMarkers = [...prevMarkers];
        }

        set({ markers: newMarkers, route: null, stats: {}, alerts: {} });

        if (
            newMarkers.length == 2 &&
            newMarkers[0].address == newMarkers[1].address
        ) {
            setModal("sameOriginDestination");
            return;
        }
        calcRoute(newMarkers);
    },

    modal: false,
    modalCookies: false,
    setModal: (modal) => set({ modal }),

    setProfile: (profileData) => {
        set(() => ({
            selectedProfile: profileData,
            selectedProfileId: profileData?.id || 0,
            mainColor: profileData?.color || "#000000",
        }));
    },

    retrieveProfileById: (id) => {
        const profile = profileList.find((p) => p.id === id);
        return profile || null;
    },

    calcRoute: async (markers) => {
        if (markers.length == 2) {
            set({ isRouteLoading: true });
        }
        const { selectedProfile, setModal } = get();
        const params = selectedProfile.params;

        const clientId = useCookieStore.getState().clientId;

        if (markers.length == 2) {
            const locs = markers.map((m) => ({
                lat: m.coordinates.lat,
                lon: m.coordinates.lng, // note here lon lng
            }));

            const route = await getRoute({
                origin: locs[0],
                destination: locs[1],
                params: params,
                metadata: {
                    clientId: clientId,
                    profileId: selectedProfile.id,
                    // custom: selectedProfile.custom,
                },
            });

            const features = route.features;
            const { alerts, stats } = postprocessRoute(route, params);
            setModal(alerts.error);

            set({
                route,
                stats: stats,
                alerts: alerts,
                isRouteLoading: false,
            });
        }
    },

    resetPage: () =>
        set(() => ({
            page: "landing",
            selectedProfile: null,
            selectedProfileId: null,
            prevProfile: null,
            mainColor: null,
            markers: [],
            route: null,
            stats: {},
            alerts: {},
        })),

    map: null,
    setMap: (map) => set({ map }),

    activeGps: false,
    followGps: false,
    refreshBoundsCounter: 1,
    refreshBounds: () => {
        const current = get().refreshBoundsCounter;
        set({ refreshBoundsCounter: current + 1 });
    },

    toggleGps: () => {
        const current = get().activeGps;
        const currentF = get().followGps;
        set({ activeGps: !current, followGps: !currentF });
    },

    downloadMap: () => {
        const route = get().route;

        sendGPS({
            callId: route.id,
            status: "downloaded",
        });

        screenshotMapById("leaflet-map", {
            pixelRatio: 1,
        });
    },

    startPath: () => {
        const route = get().route;

        // Start journey log
        sendGPS({
            callId: route.id,
            status: "started",
        });

        set({
            activeGps: true,
            rotationMap: true,
            followGps: true,
            pathGPS: [],
        });
    },

    updatePathGPS: (current) => {
        const pathGPS = get().pathGPS;
        set({ pathGPS: [...pathGPS, current] });
    },

    endPath: () => {
        const route = get().route;
        const pathGPS = get().pathGPS;

        const permissions = useCookieStore.getState().permissions;

        sendGPS({
            callId: route.id,
            status: "completed",
            path:
                permissions.gps.accepted && pathGPS.length > 2 ? pathGPS : null,
        });

        set({
            activeGps: false,
            rotationMap: false,
            followGps: false,
            modal: "evaluateApp",
            pathGPS: [],
        });
    },

    onSubmitRating(rating) {
        const route = get().route;

        sendGPS({
            callId: route.id,
            status: "completed",
            rating,
        });
    },

    onSubmitReport: (report) => {
        const clientId = useCookieStore.getState().clientId;

        sendReport({ ...report, clientId });
        set({
            modal: "reportSubmitted",
            page: "map",
        });
    },
}));
