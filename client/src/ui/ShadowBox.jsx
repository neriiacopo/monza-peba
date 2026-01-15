import { Box, useTheme } from "@mui/material";
import { useState, useEffect } from "react";

import { alpha, darken, lighten } from "@mui/material/styles";

export default function ShadowBox({
    focus = false,
    outlined = true,
    light = false,
    ...props
}) {
    const theme = useTheme();
    const shadowS = theme.noBlurShadows;
    const [bg, setBg] = useState("transparent");
    const [focusDelay, setFocusDelay] = useState(false);

    useEffect(() => {
        let timeout;
        if (focus) {
            setFocusDelay(false);
            setTimeout(() => {
                setFocusDelay(true);
            }, 300);
        }
    }, [focus, theme]);

    useEffect(() => {}, []);

    // useEffect(() => {
    //     if (light) {
    //         setBg(lighten(theme.palette.primary.main, 0.8));
    //     }
    //     if (outlined) {
    //         setBg(theme.palette.secondary.main);
    //     }
    // }, [light, outlined, focus, theme]);

    return (
        <Box
            {...props}
            sx={{
                width: "100%",
                borderRadius: theme.brdRad,
                border: outlined
                    ? `solid 2px ${theme.palette.primary.main}`
                    : "none",
                boxShadow: focusDelay ? shadowS.active : shadowS.none,
                transition: shadowS.transition,
                color: theme.palette.primary.main,

                backgroundColor: light
                    ? lighten(theme.palette.primary.main, 0.9)
                    : outlined
                    ? theme.palette.secondary.main
                    : "transparent",

                ...props.sx,
            }}
        >
            {props.children}
        </Box>
    );
}
