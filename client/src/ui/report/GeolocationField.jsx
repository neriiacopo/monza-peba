import { useCallback } from "react";
import { Button } from "@mui/material";

import KeyMap from "@/map/KeyMap";

import ShadowBox from "@/ui/ShadowBox.jsx";

export default function GeolocationField({
    addData = () => {},
    accent = "black",
    ...props
}) {
    function updatePosition(pos) {
        console.log("GEOLCATION POSITION:", pos);
        addData?.(props.id, pos);
    }
    return (
        <>
            {/* Map component or content goes here */}
            <ShadowBox
                outlined={false}
                sx={{
                    maxHeight: "150px",
                    height: "150px",
                    minHeight: "150px",
                    width: "100%",
                    mb: 1.5,
                    overflow: "hidden",
                    position: "relative",
                    pointerEvents: "auto",
                }}
            >
                <KeyMap
                    mainColor={accent}
                    getPosition={updatePosition}
                />
            </ShadowBox>
        </>
    );
}
