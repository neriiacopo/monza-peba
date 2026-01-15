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
    photo: null,
    contact: {
        email: null,
        name: null,
        surname: null,
        // consent: false,
    },
    metadata: {
        timestamp: null,
    },
};

export const reportDescriptions = [
    {
        id: 0,
        optional: false,

        fields: [
            {
                id: "issue",
                type: "toggleGroup", // ← gruppo di booleani
                label: "Tipologia",
                desc: "Seleziona un'opzione tra quelle elencate che meglio rappresenta il problema riscontrato.",
                options: reportOptions,

                default: { id: null, label: null },
            },
            {
                id: "geolocation",
                type: "geolocation",
                label: "Posizione",
                desc: "Conferma la posizione del problema segnalato sulla mappa.",
                default: { lat: null, lng: null },
            },
        ],
    },
    {
        id: 1,
        optional: true,
        fields: [
            {
                id: "comment",
                type: "textArea",
                label: "Commento",
                desc: "Aiutaci a capire meglio il problema aggiungendo un commento dettagliato.",
                default: "",
            },
            {
                id: "photo",
                type: "image",
                label: "Foto",
                desc: "Carica una foto che mostri il problema riscontrato.",
                default: null,
            },
            {
                id: "contact",
                type: "textFields",
                label: "Contatti",
                desc: "Lasciaci i tuoi contatti se desideri essere ricontattato riguardo alla segnalazione.",
                default: {
                    email: null,
                    name: null,
                    surname: null,
                },
            },
        ],
    },
];
