import { Modal, Box, Typography, Button, Slide } from "@mui/material";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import MainButton from "@/ui/MainButton";
import Spacer from "@/ui/Spacer.jsx";

export default function AlertModal({ theme }) {
    const modal = useStore((state) => state.modal); // message or false
    const setModal = useStore((state) => state.setModal); // closer

    useEffect(() => {
        if (modal) {
            console.log("AlertModal opened:", modal);
        }
    }, [modal]);

    return (
        <Modal
            open={modal !== false}
            onClose={() => setModal(false)}
            aria-labelledby="alert-modal-title"
            aria-describedby="alert-modal-description"
            sx={{
                display: "grid",
                placeItems: "center",
            }}
        >
            <Slide
                direction="up"
                in={modal !== false}
                mountOnEnter
                unmountOnExit
                {...(modal !== false ? { timeout: 500 } : {})}
            >
                <Box
                    sx={{
                        width: "min(420px, 92vw)",
                        border: `2px solid ${theme.palette.primary.main}`,
                        borderRadius: theme.brdRad,
                        p: 2.5,
                        position: "relative",

                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.secondary.main,
                        boxShadow: `0 2px 6px ${theme.palette.primary.main}55`,
                        maxHeight: "80dvh",
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",
                        textAlign: "center",
                    }}
                >
                    <Spacer height={1}>
                        <Typography
                            id="alert-modal-title"
                            variant="h4"
                            mb={2}
                        >
                            Attenzione
                        </Typography>
                    </Spacer>

                    {modal == "GPSOutsideBoundary" && <GPSOutsideBoundary />}
                    {modal == "inaccessiblePath" && <InaccessiblePath />}

                    <Spacer height={1}>
                        <MainButton
                            variant={"inverted"}
                            sx={{
                                // position: "absolute",
                                // left: 0,
                                // bottom: 0,
                                width: "75%",
                            }}
                            onClick={() => setModal(false)}
                            label={"Ok, capito!"}
                        />
                    </Spacer>
                </Box>
            </Slide>
        </Modal>
    );
}

function GPSOutsideBoundary() {
    return (
        <Typography
            id="alert-modal-description"
            mb={3}
        >
            Posizione rilevata fuori dall'area consentita. Impossibile attivare
            il tracciamento GPS
        </Typography>
    );
}

function InaccessiblePath() {
    return (
        <Typography
            id="alert-modal-description"
            mb={3}
        >
            Non è stato possibile incontrare un percorso accessibile con le
            impostazioni selezionate. Prova a modificare le tue preferenze di
            accessibilità o a scegliere un percorso diverso.
        </Typography>
    );
}
