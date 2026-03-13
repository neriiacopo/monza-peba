import {
    Modal,
    Box,
    Typography,
    Button,
    Slide,
    Stack,
    IconButton,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";
import MainButton from "@/ui/MainButton";
import Spacer from "@/ui/Spacer.jsx";

import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export default function AlertModal({ theme }) {
    const modal = useStore((state) => state.modal); // message or false
    const setModal = useStore((state) => state.setModal); // closer

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
                    {[
                        "GPSOutsideBoundary",
                        "inaccessiblePath",
                        "reportSubmitted",
                        "sameOriginDestination",
                    ].includes(modal) && (
                        <>
                            <Spacer height={1}>
                                <Typography
                                    id="alert-modal-title"
                                    variant="h4"
                                    mb={2}
                                >
                                    {modal == "reportSubmitted"
                                        ? "Grazie"
                                        : "Attenzione"}
                                </Typography>
                            </Spacer>

                            {modal == "GPSOutsideBoundary" && (
                                <GPSOutsideBoundary />
                            )}
                            {modal == "inaccessiblePath" && (
                                <InaccessiblePath />
                            )}
                            {modal == "reportSubmitted" && <ReportSubmitted />}
                            {modal == "sameOriginDestination" && (
                                <SameOriginDestination />
                            )}

                            <Spacer height={1}>
                                <MainButton
                                    variant={"inverted"}
                                    sx={{
                                        width: "75%",
                                    }}
                                    onClick={() => setModal(false)}
                                    label={"Ok, capito!"}
                                />
                            </Spacer>
                        </>
                    )}
                    {modal == "evaluateApp" && (
                        <>
                            <Spacer height={1}>
                                <Typography
                                    id="alert-modal-title"
                                    variant="h4"
                                    mb={2}
                                >
                                    Fatto!
                                </Typography>
                            </Spacer>
                            <EvaluateApp />
                        </>
                    )}
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
            il GPS.
        </Typography>
    );
}

function InaccessiblePath() {
    return (
        <Typography
            id="alert-modal-description"
            mb={3}
        >
            Non risulta disponibile nessun percorso pienamente accessibile.
            Contribuisci a ridurre questo problema: se incontri una barriera o
            un punto critico, puoi usare questa app per segnalarlo, migliorare
            la mappa e informare l'amministrazione. Nel frattempo ti mostriamo
            il percorso più breve.
        </Typography>
    );
}

function SameOriginDestination() {
    return (
        <Typography
            id="alert-modal-description"
            mb={3}
        >
            Sembra che il punto di partenza e quello di arrivo coincidano. Per
            favore, scegli due indirizzi diversi.
        </Typography>
    );
}

function ReportSubmitted() {
    return (
        <Typography
            id="alert-modal-description"
            mb={3}
        >
            La tua segnalazione è stata inviata con successo. Grazie per averci
            aiutato a rendere Tracce uno strumento migliore per tutti!
        </Typography>
    );
}

function EvaluateApp() {
    const [rate, SetRate] = useState(0);
    const onSubmitRating = useStore((s) => s.onSubmitRating);

    useEffect(() => {
        if (rate === 0) return;
        onSubmitRating(rate);
        setTimeout(() => {
            useStore.setState({ modal: false });
        }, 1500);
    }, [rate]);

    return (
        <>
            <Typography
                id="alert-modal-description"
                mb={3}
            >
                Ti abbiamo portato a destinazione? Aiutaci a migliorare Tracce
                lasciandoci una recensione della tua esperienza di percorso.
            </Typography>

            <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
            >
                {[1, 2, 3, 4, 5].map((i) => (
                    <IconButton
                        key={`star-btn-${i}`}
                        onClick={() => SetRate(i)}
                    >
                        {i <= rate ? (
                            <StarIcon color="primary" />
                        ) : (
                            <StarOutlineIcon color="primary" />
                        )}
                    </IconButton>
                ))}
            </Stack>
        </>
    );
}
