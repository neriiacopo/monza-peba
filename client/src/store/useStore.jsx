import { create } from "zustand";

import { profiles, profileList } from "@/lib/profiles.config.js";
import { getRoute } from "@/lib/api.js";
import { postprocessRoute } from "@/lib/data.utils";

export let useStore = create((set, get) => ({
    prevSession: null,
    selectedProfile: null,
    prevProfile: null,
    selectedProfileId: 0,
    // mainColor: "#000000",
    stats: {},
    alerts: {},

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

    setMarkers: (newMarker, idx = get().markers.length >= 1 ? 1 : 0) => {
        const prevMarkers = get().markers;
        const calcRoute = get().calcRoute;

        let newMarkers = [];

        if (idx == null) {
            newMarker.idx = prevMarkers.length < 2 ? 1 : 0;
            newMarkers =
                prevMarkers.length < 2
                    ? [...prevMarkers, newMarker]
                    : [newMarker];
        } else {
            newMarker.idx = idx;
            prevMarkers[idx] = { ...newMarker };
            newMarkers = [...prevMarkers];
        }
        set({ markers: newMarkers, route: null, stats: {}, alerts: {} });
        // console.log("newMarkers", newMarkers);
        calcRoute(newMarkers);
    },

    modal: false,
    modalCookies: false,
    setModal: (modal) => set({ modal }),

    // setProfile: (index) => {
    //     set(() => ({
    //         selectedProfile: profileList[index],
    //         selectedProfileId: index,
    //         mainColor: profileList[index].color,
    //     }));
    // },

    setProfile: (profileData) => {
        set(() => ({
            selectedProfile: profileData,
            selectedProfileId: profileData.id,
            mainColor: profileData.color,
        }));
    },

    retrieveProfileById: (id) => {
        const profile = profileList.find((p) => p.id === id);
        return profile || null;
    },

    calcRoute: async (markers) => {
        const { selectedProfile, setModal } = get();
        const params = selectedProfile.params;

        set({ route: null });

        if (markers.length == 2) {
            const locs = markers.map((m) => ({
                lat: m.coordinates.lat,
                lon: m.coordinates.lng, // note here lon lng
            }));

            const route = await getRoute({
                origin: locs[0],
                destination: locs[1],
                params: params,
            });

            const features = route.features;
            const { alerts, stats } = postprocessRoute(route, params);
            setModal(alerts.error);

            set({
                route,
                stats: stats,
                alerts: alerts,
            });
        }
    },

    resetPage: () =>
        set(() => ({
            page: "landing",
            selectedProfile: null,
            selectedProfileId: null,
            mainColor: null,
            markers: [],
            route: null,
            stats: {},
            alerts: {},
        })),

    map: null,
    setMap: (map) => set({ map }),

    activeGps: false,
    refreshBoundsCounter: 1,
    refreshBounds: () => {
        const current = get().refreshBoundsCounter;
        set({ refreshBoundsCounter: current + 1 });
    },

    toggleGps: () => {
        const current = get().activeGps;
        set({ activeGps: !current });
    },
}));
