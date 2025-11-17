// RAW svg for profile selection
import wheelchairRaw from "@/assets/svg/profiles_wheelchair.svg?raw";
import parentRaw from "@/assets/svg/profiles_parent.svg?raw";
import elderlyRaw from "@/assets/svg/profiles_elderly.svg?raw";
import baseRaw from "@/assets/svg/profiles_base.svg?raw";

// URL svg for icons (necessary?)
import wheelchairUrl from "@/assets/svg/profiles_wheelchair.svg";
import parentUrl from "@/assets/svg/profiles_parent.svg";
import elderlyUrl from "@/assets/svg/profiles_elderly.svg";
import baseUrl from "@/assets/svg/profiles_base.svg";

export const profiles = {
    wheelchair: {
        id: 0,
        label: "Sedia a rotelle",
        color: "#0875f9",
        svg: wheelchairRaw,
        icon: wheelchairUrl,
        params: {
            steps: ["STEPS", "STEP_STAIRS"],
            width_min: 1.35,
            crash: 0.1,
            pali_luce: 0.6,
            slope: 1,
        },
    },
    parent: {
        id: 1,
        label: "Genitore",
        color: "#ffa500",
        svg: parentRaw,
        icon: parentUrl,
        params: {
            steps: ["STEP_STAIRS"],
            width_min: 1.2,
            crash: 0.4,
            pali_luce: 0.45,
            slope: 0.7,
        },
    },
    elderly: {
        id: 2,
        label: "Anziano",
        color: "#41ce69",
        svg: elderlyRaw,
        icon: elderlyUrl,
        params: {
            steps: ["STEPS"],
            width_min: 0.9,
            crash: 0.2,
            pali_luce: 0.7,
            slope: 1,
        },
    },
    other: {
        id: 3,
        label: "Altro",
        color: "#ed4347",
        svg: baseRaw,
        icon: baseUrl,
        params: {
            steps: [],
            width_min: 0.1,
            crash: 0.5,
            pali_luce: 0.5,
            slope: 1,
        },
    },
};

export const profileList = Object.entries(profiles).map(([key, data]) => ({
    id: key,
    ...data,
}));
