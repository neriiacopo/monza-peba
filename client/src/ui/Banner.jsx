import { Fragment } from "react";
import { Box, IconButton, SvgIcon } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useStore } from "@/store/useStore.jsx";
import { useCookieStore } from "../store/useCookieStore";

import LogoIcon from "@/assets/svg/outlined/icon_logo.svg?react";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import ErrorIcon from "@mui/icons-material/Error";

export default function Banner({}) {
    const theme = useTheme();
    const page = useStore((s) => s.page);
    const resetPage = useStore((s) => s.resetPage);
    const selectedProfile = useStore((s) => s.selectedProfile);
    const hasProfileData = useCookieStore((s) => s.hasProfileData);

    const btns = [
        {
            icon: null,
            iconSvg: (
                <SvgIcon
                    component={LogoIcon}
                    inheritViewBox
                    sx={{
                        width: "100%",
                        height: "100%",

                        "& path, & polygon": {
                            fill: "inherit",
                        },
                    }}
                />
            ),
            img: "/favicon.png",
            action: () => resetPage(),
            visible: true,
            disabled: false,
        },
        {
            icon: SettingsIcon,
            action: () =>
                useStore.setState({ page: "profiles", subpage: "stats" }),
            page: "profiles",
            visible: page != "landing",
            disabled: false,
        },
        {
            icon: MapIcon,
            action: () => useStore.setState({ page: "map" }),
            page: "map",
            visible: page != "landing",
            disabled: !hasProfileData,
        },
        {
            icon: ErrorIcon,
            action: () => useStore.setState({ page: "report" }),
            page: "report",
            visible: page != "landing",
            disabled: !hasProfileData,
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
                            disabled={btn.disabled}
                            sx={{
                                width: `${theme.iconH}`,
                                height: `${theme.iconH}`,
                                marginLeft:
                                    index === 0 ? 0 : theme.grid.spacing,
                                borderRadius: btn.icon ? theme.brdRad : 1,
                                visibility: btn.visible ? "visible" : "hidden",
                            }}
                        >
                            {btn.icon ? (
                                <btn.icon />
                            ) : btn.iconSvg ? (
                                btn.iconSvg
                            ) : (
                                <img
                                    src={btn.img}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            )}
                        </IconButton>

                        {index == 0 ? <Box sx={{ flexGrow: 1 }}></Box> : null}
                    </Fragment>
                );
            })}
        </Box>
    );
}
