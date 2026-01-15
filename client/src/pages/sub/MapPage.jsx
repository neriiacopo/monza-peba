import { useStore } from "@/store/useStore.jsx";
import { useEffect, useState, useRef } from "react";
import { Fade, Box } from "@mui/material";
import { getBbox } from "@/lib/api";

import AddressInputAuto from "@/ui/AddressInputAuto.jsx";
import MapArea from "@/ui/MapArea.jsx";

import ShadowBox from "@/ui/ShadowBox";

export default function MapPage({ theme, ...props }) {
    const [initMap, setInitMap] = useState(false);
    const [expand, setExpand] = useState(false);
    const mainRef = useRef(null);
    const markers = useStore((s) => s.markers);

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
            {/* Input 1 */}
            <Box
                sx={{
                    flexShrink: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <AddressInputAuto
                    theme={theme}
                    label="Da"
                    placeholder="Seleziona origine"
                    idx={0}
                    sx={{
                        display: expand ? "none" : "flex",
                        marginBottom: theme.grid.spacing,

                        ...props.sx,
                    }}
                />
            </Box>

            {/* Input 2 */}
            <Box
                sx={{
                    flexShrink: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <AddressInputAuto
                    theme={theme}
                    label="A"
                    placeholder="Seleziona destinazione"
                    idx={1}
                    sx={{
                        display:
                            expand || markers.length === 0 ? "none" : "flex",

                        marginBottom: theme.grid.spacing,
                        ...props.sx,
                    }}
                />
            </Box>
            {/* Map Area */}
            {theme.isMobile ? (
                <ShadowBox
                    focus
                    sx={{
                        overflow: "hidden",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        // marginTop: theme.grid.spacing,
                        // height: `${theme.grid.units.h * 9}px`,
                        flexGrow: 1,
                    }}
                >
                    <MapArea
                        theme={theme}
                        initMap={initMap}
                        setExpand={setExpand}
                        expand={expand}
                        sx={{ ...props.sx }}
                        ref={mainRef}
                    />
                </ShadowBox>
            ) : (
                <Box sx={{ flexGrow: 1 }}></Box>
            )}
        </>
    );
}
