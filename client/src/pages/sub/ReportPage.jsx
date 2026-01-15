import { useState, useEffect, useRef, useCallback } from "react";
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    RadioGroup,
    Radio,
    TextField,
    Button,
    Chip,
    Box,
    Typography,
    Stack,
    Divider,
    Fade,
} from "@mui/material";

import {
    reportOptions,
    reportTemplate,
    reportDescriptions,
} from "@/lib/report.config";

import ShadowBox from "@/ui/ShadowBox.jsx";
import Spacer from "@/ui/Spacer.jsx";
import KeyMap from "@/map/KeyMap";
import MainButton from "@/ui/MainButton";
import FullWButton from "@/ui/FullWButton";

import ToggleGroupField from "@/ui/report/ToggleGroupField";
import GeolocationField from "@/ui/report/GeolocationField";
import TextAreaField from "@/ui/report/TextAreaField";
import TextFields from "@/ui/report/TextFields";
import PhotoField from "@/ui/report/PhotoField";

export default function ReportPage({ theme, onSubmit, ...props }) {
    const slideRef = useRef(null);
    const [filled, setFilled] = useState(false);
    // const [data, setData] = useState(reportTemplate);
    const [sMaxH, setSMaxH] = useState(0);
    const ref = useRef(0);
    const data = useRef(reportTemplate);

    useEffect(() => {
        console.log(data);
    }, [data.current]);

    const addData = (fieldId, value) => {
        console.log(value);
        ref.current += 1;
        data.current = { ...data.current, [fieldId]: value };
        console.log(data.current);

        if (data.current.issue?.id && data.current?.geolocation?.lat) {
            setFilled(true);
        }
    };

    const handleSubmit = () => {
        console.log("data to send", data.current);
        const d = { ...data.current };
        // if (onSubmit) {
        //     onSubmit({
        //         type: selected,
        //         comments,
        //     });
        // }
        alert(JSON.stringify(d));
    };

    useEffect(() => {
        if (slideRef.current) {
            const H = slideRef.current.getBoundingClientRect().height;
            setSMaxH(H);
        }
    }, [slideRef]);

    function Section({ title, description, children }) {
        return (
            <>
                <Box
                    sx={{
                        mb: 1,
                        pointerEvents: "auto",
                        width: "100%",
                        textAlign: "left",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ lineHeight: 1.1, mb: 1 }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{ fontSize: 13, lineHeight: 1.35, mb: 1.5 }}
                    >
                        {description}
                    </Typography>
                </Box>
                {children}
            </>
        );
    }

    function TypologySection() {
        return (
            <>
                <Section
                    title="Tipologia"
                    description="Seleziona un'opzione tra quelle elencate che meglio rappresenta il problema riscontrato."
                >
                    <ToggleGroupField
                        key={reportDescriptions[0].fields[0].id}
                        {...reportDescriptions[0].fields[0]}
                        addData={addData}
                    />
                </Section>
            </>
        );
    }

    function MapSection() {
        return (
            <Section
                title="Posizione"
                description="Conferma la posizione del problema segnalato sulla mappa."
            >
                <GeolocationField
                    accent={theme.palette.primary.main}
                    key={reportDescriptions[0].fields[1].id}
                    {...reportDescriptions[0].fields[1]}
                    addData={addData}
                />
            </Section>
        );
    }

    function CommentSection() {
        const [comment, setComment] = useState("");

        return (
            <>
                <Section
                    title="Commento"
                    description="Aiutaci a capire meglio il problema aggiungendo un commento dettagliato. Questa informazione è opzionale."
                >
                    <TextAreaField
                        key={reportDescriptions[1].fields[0].id}
                        {...reportDescriptions[1].fields[0]}
                        addData={addData}
                    />
                </Section>
            </>
        );
    }

    function ContactSection({ obj }) {
        return (
            <>
                <Section
                    title="Contatti"
                    description="Lasciaci i tuoi contatti se desideri essere ricontattato riguardo alla segnalazione."
                ></Section>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    <TextField
                        fullWidth
                        variant="standard"
                        placeholder="Email"
                        sx={{ mb: 1 }}
                    />
                    <TextField
                        fullWidth
                        variant="standard"
                        placeholder="Nome"
                        sx={{ mb: 1 }}
                    />
                    <TextField
                        fullWidth
                        variant="standard"
                        placeholder="Cognome"
                        sx={{ mb: 1 }}
                    />
                </Stack>
            </>
        );
    }

    const renderField = (field) => {
        if (field.type === "toggleGroup")
            return (
                <ToggleGroupField
                    options={field.options}
                    addData={addData}
                />
            );
    };

    return (
        <ShadowBox
            focus={true}
            outlined={true}
            sx={{
                flexGrow: 1,
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                // padding: theme.grid.spacing,
                py: 2.5,
                px: 1.5,
                position: "relative",
                // transition: " all 0.3s ease-in-out",
                pointerEvents: "auto",
                ...props.sx,
            }}
        >
            <Spacer
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 0,
                    maxWidth: "60%",
                    overflow: "hidden",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        // fontSize: 22,
                        lineHeight: 1.1,
                        // mb: 1,
                        textAlign: "center",
                    }}
                >
                    Segnala un Problema
                </Typography>
            </Spacer>

            <Box
                ref={slideRef}
                sx={{
                    flexGrow: 1,
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    overflow: "auto",
                }}
            >
                <Box
                    sx={{
                        maxHeight: sMaxH ? sMaxH : "0px",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        width: "100%",
                        overflowY: "scroll",
                        textAlign: "left",
                        px: 2,
                    }}
                >
                    <TypologySection />
                    <Divider
                        sx={{
                            borderColor: theme.palette.primary.main,
                            opacity: 0.65,
                            mb: 1.5,
                            width: "100%",
                        }}
                    />
                    <MapSection />

                    <Divider
                        sx={{
                            borderColor: theme.palette.primary.main,
                            opacity: 0.65,
                            mb: 1.5,
                            width: "100%",
                        }}
                    />
                    <CommentSection />
                    <Divider
                        sx={{
                            borderColor: theme.palette.primary.main,
                            opacity: 0.65,
                            mb: 1.5,
                            width: "100%",
                        }}
                    />
                    <ContactSection />
                </Box>
            </Box>

            <Stack
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    mt: theme.grid.spacing,
                }}
            >
                <FullWButton
                    label={"Invia Segnalazione"}
                    onClick={handleSubmit}
                    disabled={!filled}
                />
            </Stack>
        </ShadowBox>
    );
}
