import { Fragment } from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useStore } from "@/store/useStore.jsx";

import LogoIcon from "@mui/icons-material/Foundation";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Banner({ page }) {
    const theme = useTheme();

    const btns = [
        { icon: LogoIcon, action: () => console.log("Logo clicked") },
        {
            icon: SettingsIcon,
            action: () => useStore.setState({ page: "profiles" }),
            page: "profiles",
        },
        {
            icon: MapIcon,
            action: () => useStore.setState({ page: "map" }),
            page: "map",
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                height: `${theme.grid.units.h}px`,
                marginY: theme.grid.spacing,
                borderRadius: theme.brdRad,
                // border: `solid 2px ${theme.palette.primary.main}`,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            {btns.map((btn, index) => {
                const active = page == btn.page;
                return (
                    <Fragment key={index}>
                        <IconButton
                            onClick={btn.action}
                            variant={active ? "inverted" : "default"}
                            sx={{
                                width: `${theme.iconH}`,
                                height: `${theme.iconH}`,
                                marginLeft:
                                    index === 0 ? 0 : theme.grid.spacing,
                            }}
                        >
                            <btn.icon />
                        </IconButton>
                        {index == 0 ? <Box sx={{ flexGrow: 1 }}></Box> : null}
                    </Fragment>
                );
            })}
        </Box>
    );
}
