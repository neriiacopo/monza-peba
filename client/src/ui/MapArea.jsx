import { IconButton, Stack } from "@mui/material";

import Basemap from "../map/Basemap";
import Stats from "./Stats";

import MapGoButton from "./MapGoButton";

import OpenFullScreenIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import GpsActivateIcon from "@mui/icons-material/GpsFixed";
import GpsDisableIcon from "@mui/icons-material/LocationDisabled";

import { useStore } from "@/store/useStore";

export default function MapArea({
    theme,
    initMap,
    setExpand,
    expand,
    interactive = true,
    ...props
}) {
    const toggleGps = useStore((s) => s.toggleGps);
    const activeGps = useStore((s) => s.activeGps);

    return (
        <>
            {/* <VizSelection
                theme={theme}
                options={pathOptions}
            /> */}

            <Stack
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    zIndex: 10,
                    color: theme.palette.primary.main,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pointerEvents: "none",
                }}
            >
                <IconButton
                    variant={"mini"}
                    sx={{
                        pointerEvents: "auto",
                    }}
                    onClick={() => setExpand((expand) => !expand)}
                >
                    {expand ? <CloseFullscreenIcon /> : <OpenFullScreenIcon />}
                </IconButton>
                <IconButton
                    variant={"mini"}
                    sx={{
                        pointerEvents: "auto",
                    }}
                    onClick={() => toggleGps()}
                >
                    {activeGps ? <GpsDisableIcon /> : <GpsActivateIcon />}
                </IconButton>
            </Stack>

            <MapGoButton isMobile={true} />

            <Stats />

            {initMap && (
                <Basemap
                    mainColor={theme.palette.primary.main}
                    expand={expand}
                    interactive={interactive}
                />
            )}
        </>
    );
}
