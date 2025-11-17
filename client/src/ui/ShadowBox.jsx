import { Box, useTheme } from "@mui/material";
import { useState } from "react";

export default function ShadowBox({
    focus = false,
    outlined = true,
    ...props
}) {
    const theme = useTheme();
    const shadowS = theme.noBlurShadows;

    return (
        <Box
            {...props}
            sx={{
                width: "100%",
                borderRadius: theme.brdRad,
                border: outlined
                    ? `solid 2px ${theme.palette.primary.main}`
                    : "none",
                boxShadow: focus ? shadowS.active : shadowS.none,
                transition: shadowS.transition,
                color: theme.palette.primary.main,

                backgroundColor: outlined
                    ? theme.palette.secondary.main
                    : "transparent",

                ...props.sx,
            }}
        >
            {props.children}
        </Box>
    );
}
