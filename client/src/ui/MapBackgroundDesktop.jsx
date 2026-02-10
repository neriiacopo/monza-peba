import { useStore } from "@/store/useStore.jsx";
import { useEffect, useState, useRef } from "react";
import { Fade, Box } from "@mui/material";
import { getBbox } from "@/lib/api";

import Basemap from "@/map/Basemap";

export default function MapBackgroundDesktop({ theme, ...props }) {
    const [initMap, setInitMap] = useState(false);
    const isRouteLoading = useStore((s) => s.isRouteLoading);

    useEffect(() => {
        async function fetchBbox() {
            try {
                const data = await getBbox({});
                useStore.setState({ bbox: data.bbox });
                setInitMap(true);
            } catch (err) {
                console.error("Error fetching bbox:", err);
            }
        }

        fetchBbox();
    }, []);
    return (
        <>
            {/* Map Area */}
            <Box
                focus
                sx={{
                    overflow: "hidden",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                    // height: `${theme.grid.units.h * 9}px`,
                    flexGrow: 1,

                    cursor: "default",
                }}
            >
                {initMap && (
                    <Basemap
                        mainColor={theme.palette.primary.main}
                        expand={true}
                        interactive={!isRouteLoading}
                    />
                )}
            </Box>
        </>
    );
}
