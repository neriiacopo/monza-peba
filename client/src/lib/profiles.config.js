// RAW svg for profile selection
import wheelchairRaw from "@/assets/svg/layered/profiles_wheelchair.svg?raw";
import parentRaw from "@/assets/svg/layered/profiles_parent.svg?raw";
import elderlyRaw from "@/assets/svg/layered/profiles_elderly.svg?raw";
import baseRaw from "@/assets/svg/layered/profiles_base.svg?raw";

// URL svg for icons (necessary? maybe better to have it in useIcon)
import wheelchairUrl from "@/assets/svg/outlined/icon_profiles_wheelchair.svg";
import parentUrl from "@/assets/svg/outlined/icon_profiles_parent.svg";
import elderlyUrl from "@/assets/svg/outlined/icon_profiles_elderly.svg";
import baseUrl from "@/assets/svg/outlined/icon_profiles_base.svg";

export const profiles = {
    wheelchair: {
        id: 0,
        custom: false,
        label: "Sedia a rotelle",
        color: "#0875f9",
        svg: wheelchairRaw,
        icon: wheelchairUrl,
        params: {
            steps: ["STEPS", "STEP_STAIRS"],
            width_min: 1.2,
            crash: 0.1,
            pali_luce: 0.6,
            slope: 1,
        },
        desc: "Esclude tutti i percorsi con gradini o scalinate, privilegia larghezze ampie e pendenze minime. Anche piccoli ostacoli o discontinuità rendono un percorso non accessibile.",
    },
    parent: {
        id: 1,
        custom: false,
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
        desc: "Esclude le scalinate, richiede spazio sufficiente per muoversi e manovrare, e riduce l’impatto di pendenze e interferenze. L’accessibilità è legata alla continuità del movimento.",
    },
    elderly: {
        id: 2,
        custom: false,
        label: "Persona con disabilità motorie",
        color: "#41ce69",
        svg: elderlyRaw,
        icon: elderlyUrl,
        params: {
            steps: ["STEP_STAIRS"],
            width_min: 0.9,
            crash: 0.2,
            pali_luce: 0.7,
            slope: 1,
        },
        desc: "Evita le scalinate, tollera tratti più stretti ma penalizza pendenze elevate e situazioni instabili. L’accessibilità dipende dallo sforzo richiesto lungo il percorso.",
    },
    other: {
        id: 3,
        custom: false,
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
        desc: "Non impone esclusioni rigide: gradini, larghezze e pendenze vengono valutati in modo flessibile. L’accessibilità è qui una media tra comfort, sicurezza e praticità.",
    },
};

export const paramsDescriptions = [
    {
        id: 0,
        title: "Barriere",
        desc: "Queste opzioni definiscono ostacoli che non possono essere attraversati in nessun caso. Se presenti lungo un percorso, il percorso viene escluso automaticamente.",

        fields: [
            {
                id: "steps",
                type: "toggleGroup", // ← gruppo di booleani
                label: "Dislivelli",
                desc: "Tipologie di gradini o scalinate da evitare completamente.",

                options: {
                    STEPS: { label: "Gradino" },
                    STEP_STAIRS: { label: "Scalinate" },
                },

                default: {
                    STEPS: true,
                    STEP_STAIRS: true,
                },
            },
        ],
    },

    {
        id: 1,
        title: "Requisiti minimi",
        desc: "Questi parametri indicano le condizioni minime che un percorso deve rispettare per essere considerato adatto.",

        fields: [
            {
                id: "width_min",
                type: "slider",
                label: "Larghezza minima",
                unit: "m",
                min: 0.6,
                max: 2,
                step: 0.1,
                default: 1.0,
                desc: "Larghezza minima del percorso in metri.",
            },
            {
                id: "slope",
                type: "slider",
                label: "Pendenza massima",
                unit: "%",
                min: 0,
                max: 10,
                step: 1,
                default: 8,
                desc: "Percentuale di pendenza massima consentita.",
            },
        ],
    },

    {
        id: 2,
        title: "Preferenze",
        desc: "Queste impostazioni non escludono un percorso, ma influenzano la scelta finale (0 = non considerare, 1 = evitare il più possibile).",

        fields: [
            {
                id: "crash",
                type: "slider",
                label: "Evitare percorsi accidentati",
                min: 0,
                max: 1,
                step: 0.1,
                default: 0.2,
                desc: "Tolleranza a percorsi con incidenti frequenti.",
            },
            {
                id: "pali_luce",
                type: "slider",
                label: "Favorire percorsi illuminati",
                min: 0,
                max: 1,
                step: 0.1,
                default: 0.5,
                desc: "Importanza a scegliere sentieri con buona illuminazione o segnaletica.",
            },
        ],
    },
];

export const profileList = Object.entries(profiles).map(([key, data]) => ({
    lbl: key,
    id: key,
    ...data,
}));

export const getColors = () => {
    return Object.entries(profiles).map(([key, data]) => data.color);
};
