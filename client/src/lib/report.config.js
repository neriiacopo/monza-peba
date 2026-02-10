export const reportOptions = [
    {
        id: 1,
        label: "Superficie sconnessa",
    },
    {
        id: 2,
        label: "Manca una rampa",
    },
    {
        id: 3,
        label: "Larghezza troppo limitata",
    },
    {
        id: 4,
        label: "Parcheggio abusivo",
    },
    {
        id: 5,
        label: "Pendenza troppo elevata",
    },
    {
        id: 6,
        label: "Manca l’attraversamento",
    },
    {
        id: 7,
        label: "Immondizia",
    },
    {
        id: 8,
        label: "Albero/ Palo",
    },
    {
        id: 9,
        label: "Altro",
    },
];

export const reportTemplate = {
    issue: { id: null, label: null },
    geolocation: { lat: null, lng: null },
    comment: "",
    contact: {
        email: null,
        firstName: null,
        lastName: null,
        // consent: false,
    },
    // metadata: {
    //     timestamp: null,
    //     clientId: null,
    // },
};

export const reportDescriptions = [
    {
        id: "issue",
        type: "toggleGroup", // ← gruppo di booleani
        label: "Tipologia",
        desc: "Seleziona un'opzione tra quelle elencate che meglio rappresenta il problema riscontrato.",
        options: reportOptions,

        optional: false,
        default: { id: null, label: null },
    },
    {
        id: "geolocation",
        type: "geolocation",
        label: "Posizione",
        desc: "Conferma la posizione del problema segnalato sulla mappa.",
        optional: false,
        default: { lat: null, lng: null },
    },
    {
        id: "comment",
        type: "textArea",
        label: "Commento",
        desc: "Aiutaci a capire meglio il problema aggiungendo un commento dettagliato.",
        optional: true,
        default: "",
    },
    // {
    //     id: "photo",
    //     type: "image",
    //     label: "Foto",
    //     desc: "Carica una foto che mostri il problema riscontrato.",
    //     optional:true, default: null,
    // },
    {
        id: "contact",
        type: "textFields",
        label: "Contatti",
        desc: "Lasciaci i tuoi contatti se desideri essere ricontattato riguardo alla segnalazione.",
        optional: true,
        default: {
            email: "",
            firstName: "",
            lastName: "",
        },
    },
];
