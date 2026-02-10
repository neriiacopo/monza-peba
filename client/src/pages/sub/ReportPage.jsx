import { useState, useEffect, useRef } from "react";
import { Box, Typography, Stack } from "@mui/material";

import { reportTemplate, reportDescriptions } from "@/lib/report.config";

import { useStore } from "@/store/useStore";

import ShadowBox from "@/ui/ShadowBox.jsx";
import Spacer from "@/ui/Spacer.jsx";
import FullWButton from "@/ui/FullWButton";

import Section from "@/pages/report/Section.jsx";
import ToggleGroupField from "@/pages/report/ToggleGroupField";
import GeolocationField from "@/pages/report/GeolocationField";
import TextAreaField from "@/pages/report/TextAreaField";
import TextFields from "@/pages/report/TextFields";

export default function ReportPage({ theme }) {
    const slideRef = useRef(null);
    const [filled, setFilled] = useState(false);
    const [sMaxH, setSMaxH] = useState(0);
    const ref = useRef(0);
    const data = useRef(reportTemplate);

    const onSubmitReport = useStore((state) => state.onSubmitReport);

    const addData = (fieldId, value) => {
        ref.current += 1;
        data.current = { ...data.current, [fieldId]: value };

        if (data.current.issue?.id && data.current?.geolocation?.lat) {
            setFilled(true);
        }
    };

    const handleSubmit = () => {
        const d = { ...data.current };
        if (onSubmitReport) {
            onSubmitReport(d);
        }
    };

    useEffect(() => {
        if (slideRef.current) {
            const H = slideRef.current.getBoundingClientRect().height;
            setSMaxH(H);
        }
    }, [slideRef]);

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
                py: 2.5,
                px: 1.5,
                position: "relative",
                pointerEvents: "auto",
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
                    {reportDescriptions.map((section, sIndex) => {
                        return (
                            <Section
                                key={sIndex}
                                theme={theme}
                                title={section.label}
                                description={section.desc}
                                last={sIndex === reportDescriptions.length - 1}
                            >
                                {section.id == "issue" ? (
                                    <ToggleGroupField
                                        key={section.id}
                                        {...section}
                                        addData={addData}
                                        inputData={data.current[section.id]}
                                    />
                                ) : section.id == "geolocation" ? (
                                    <GeolocationField
                                        accent={theme.palette.primary.main}
                                        key={section.id}
                                        {...section}
                                        addData={addData}
                                        inputData={data.current[section.id]}
                                    />
                                ) : section.id == "comment" ? (
                                    <TextAreaField
                                        key={section.id}
                                        {...section}
                                        addData={addData}
                                        inputData={data.current[section.id]}
                                    />
                                ) : section.id == "contact" ? (
                                    <TextFields
                                        key={section.id}
                                        {...section}
                                        addData={addData}
                                        inputData={data.current[section.id]}
                                    />
                                ) : (
                                    <></>
                                )}
                            </Section>
                        );
                    })}
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
