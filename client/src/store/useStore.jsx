import { create } from "zustand";

import { profiles, profileList } from "@/lib/profiles.config.js";
import { getRoute } from "@/lib/api.js";

export let useStore = create((set, get) => ({
    prevSession: null,
    selectedProfile: null,
    selectedProfileId: 0,
    // mainColor: "#000000",

    bbox: null,
    page: "landing",

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

    setMarkers: (newMarker) => {
        const prevMarkers = get().markers;

        set({
            markers:
                prevMarkers.length < 2
                    ? [...prevMarkers, newMarker]
                    : [newMarker],
        });
    },

    setProfile: (index) =>
        set(() => ({
            selectedProfile: profileList[index],
            selectedProfileId: index,
            mainColor: profileList[index].color,
        })),

    calcRoute: async (origin, destination) => {
        const { markers, selectedProfile } = get();

        if (markers.length < 2) return null;

        const route = await getRoute({
            origin,
            destination,
            params: selectedProfile.params,
        });

        set({ route });
    },
}));
