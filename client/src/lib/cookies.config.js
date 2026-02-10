import { color } from "echarts";

export const cookiesTemplate = {
    privacy: {
        accepted: false,
        optional: false,
        filename: "Privacy agreement",
        label: "Informativa Privacy",
        clause: "Dichiaro di aver letto e compreso l'Informativa sulla Privacy della App e acconsento al trattamento dei dati per le finalità descritte.",
    },
    terms: {
        accepted: false,
        optional: false,
        filename: "Terms of use",
        label: "Termini di Utilizzo",
        clause: "Dichiaro di aver letto, compreso e di accettare integralmente i Termini di Utilizzo del servizio.",
    },
    gps: {
        accepted: false,
        optional: true,
        filename: null,
        label: null,
        clause: "Acconsento alla raccolta anonima dei dati di localizzazione GPS durante la navigazione, ai soli fini di miglioramento del servizio e secondo quanto descritto nell’informativa privacy. (Opzionale)",
    },
};

export const profileDataTemplate = {
    key: null,
    id: null,
    custom: false,
    params: {
        steps: [],
        width_min: null,
        crash: null,
        pali_luce: null,
        slope: null,
    },
};
