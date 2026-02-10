import React, { useMemo, useState, useEffect, Fragment } from "react";
import {
    Box,
    Typography,
    Divider,
    Switch,
    Button,
    FormControlLabel,
    Modal,
    Stack,
    Fade,
    Slide,
} from "@mui/material";

import { useStore } from "@/store/useStore";
import { useCookieStore } from "@/store/useCookieStore";

import MarkdownContent from "@/ui/MarkdownContent";
import ShadowBox from "@/ui/ShadowBox.jsx";
import MainButton from "@/ui/MainButton.jsx";
import FullWButton from "@/ui/FullWButton.jsx";
import Spacer from "@/ui/Spacer.jsx";

export default function MdModal({
    theme,
    open = false,
    setModal = () => {},
    filename = "How to",
}) {
    const accent = theme.palette.primary.main;

    return (
        <Modal
            open={open}
            aria-labelledby="alert-modal-title"
            aria-describedby="alert-modal-description"
            sx={{
                display: "grid",
                placeItems: "center",
            }}
        >
            <Slide
                direction="up"
                in={open}
                mountOnEnter
                unmountOnExit
                {...(open ? { timeout: 500 } : {})}
            >
                <Box
                    sx={{
                        width: "min(420px, 92vw)",
                        border: `2px solid ${accent}`,
                        borderRadius: theme.brdRad,
                        p: 2.5,
                        color: accent,
                        position: "relative",
                        backgroundColor: theme.palette.secondary.main,
                        boxShadow: `0 2px 6px ${accent}55`,
                        maxHeight: "90dvh",
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            // fontSize: 22,
                            lineHeight: 1.1,
                            mb: 1,
                        }}
                    >
                        Come funziona <br /> Tracce.app?
                    </Typography>
                    {/* <Divider
                        sx={{ borderColor: accent, opacity: 0.65, mb: 1.5 }}
                    /> */}

                    <Box>
                        <ShadowBox
                            light={true}
                            outlined={false}
                            sx={{
                                px: 2,
                                py: 1,
                                my: 1,
                                maxHeight: "auto",
                                overflow: "hidden",
                            }}
                        >
                            <MarkdownContent filename={filename} />
                        </ShadowBox>
                    </Box>
                    <Spacer
                        height={1}
                        sx={{
                            display: "flex",

                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <MainButton
                            variant={"inverted"}
                            sx={{
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
