import { Stack, Fade } from "@mui/material";
import { useTheme } from "@emotion/react";

import { useStore } from "@/store/useStore.jsx";
import { screenshotMapById } from "@/lib/map.utils.js";

import FullWButton from "@/ui/FullWButton";
import { useState } from "react";

export default function MapGoButton({ isMobile = false }) {
    const startPath = useStore((s) => s.startPath);
    const endPath = useStore((s) => s.endPath);
    const theme = useTheme();
    const route = useStore((s) => s.route);
    const followGps = useStore((s) => s.followGps);

    const btn = {
        mobile: {
            label: followGps ? "Fine" : "Parti",
            fn: followGps ? endPath : startPath,
            variant: followGps ? "inverted" : "contained",
        },
        desktop: {
            label: "Stampa il percorso",
            variant: "contained",
            fn: () =>
                screenshotMapById("leaflet-map", {
                    pixelRatio: 1,
                }),
        },
    };

    return (
        <Fade
            in={Boolean(route)}
            timeout={{ enter: 250, exit: 200 }}
        >
            <Stack
                sx={{
                    position: isMobile ? "absolute" : "relative",
                    bottom: 0,
                    right: 0,
                    zIndex: 10,
                    width: isMobile ? "25%" : "100%",
                    color: theme.palette.primary.main,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pointerEvents: "none",
                    m: theme.grid.spacing,
                }}
            >
                <FullWButton
                    label={btn[isMobile ? "mobile" : "desktop"].label}
                    onClick={btn[isMobile ? "mobile" : "desktop"].fn}
                    variant={btn[isMobile ? "mobile" : "desktop"].variant}
                />
            </Stack>
        </Fade>
    );
}
