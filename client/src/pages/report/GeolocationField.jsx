import { useState, useEffect, useMemo } from "react";
import { Button, CircularProgress, Box, Typography } from "@mui/material";

import { getGPSPosition } from "@/lib/map.utils";

import KeyMap from "@/map/KeyMap";

import ShadowBox from "@/ui/ShadowBox.jsx";

export default function GeolocationField({
    addData = () => {},
    inputData,
    accent = "black",
    ...props
}) {
    const [fetched, setFetched] = useState(false);

    function updatePosition(pos) {
        addData?.(props.id, pos);
    }

    const [location, setLocation] = useState(inputData ?? null);

    useEffect(() => {
        if (fetched) return;
        getGPSPosition().then(setLocation).catch(console.error);
    }, [fetched]);

    useEffect(() => {
        if (!location?.lat || !location?.lng) return;
        updatePosition(location);

        setFetched(true);
    }, [location]);

    return (
        <>
            {/* Map component or content goes here */}
            <ShadowBox
                outlined={false}
                light={!fetched}
                sx={{
                    maxHeight: "150px",
                    height: "150px",
                    minHeight: "150px",
                    width: "100%",
                    mb: 1.5,
                    overflow: "hidden",
                    position: "relative",
                    pointerEvents: "auto",
                    transition: "all 0.3s ease-in-out",
                }}
                className={!fetched ? "loading" : ""}
            >
                {fetched ? (
                    <KeyMap
                        mainColor={accent}
                        location={location}
                    />
                ) : (
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* <CircularProgress /> */}
                        <Typography>In attesa della posizione...</Typography>
                    </Box>
                )}
            </ShadowBox>
        </>
    );
}
