import { create } from "zustand";

export let useStore = create((set, get) => ({
    prevSession: null,
    mainColor: "#FF4D4E",
    profile: "pedone",
    bbox: null,
    page: null,

    profiles: {
        wheelchair: "Sedia a rotelle",
        normo: "Pedone",
        visuallyImpaired: "Ipovedente",
        elderly: "Anziano",
        parent: "Genitore",
    },

    colors: {
        wheelchair: "#4FC3F7",
        normo: "#fad02c",
        visuallyImpaired: "#F06292",
        elderly: "#66BB6A",
        parent: "#f59e0b",
    },

    // geodb: [],
    // landing: true,
    // visibleDots: false,
    // methodology: false,

    // resetClick: (obj) => {
    //     const geodb = get().geodb;

    //     geodb.map((e) => {
    //         if (e.id == obj?.id) e.clicked = true;
    //         else e.clicked = false;
    //     });
    //     set({ geodb });
    // },
}));
