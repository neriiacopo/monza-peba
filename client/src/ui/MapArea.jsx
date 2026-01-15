import { Button, IconButton, Stack } from "@mui/material";

import ShadowBox from "./ShadowBox";
import Basemap from "../map/Basemap";
import VizSelection from "./VizSelection";
import MainButton from "./MainButton";
import Stats from "./Stats";

import FullscreenIcon from "@mui/icons-material/Fullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

import { useStore } from "@/store/useStore";

export default function MapArea({
    theme,
    initMap,
    setExpand,
    expand,
    ...props
}) {
    const pathOptions = ["Distanza", "Pendenza", "Larghezza", "Incidenti"];
    const toggleGps = useStore((s) => s.toggleGps);

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
                    <OpenInFullIcon />
                </IconButton>
                <IconButton
                    variant={"mini"}
                    sx={{
                        pointerEvents: "auto",
                    }}
                    onClick={() => toggleGps()}
                >
                    <GpsFixedIcon />
                </IconButton>
            </Stack>

            <Stats />

            {initMap && (
                <Basemap
                    mainColor={theme.palette.primary.main}
                    expand={expand}
                />
            )}
            {/* <MainButton
                sx={{
                    position: "absolute",
                    bottom: theme.grid.spacing,
                    width: "50%",
                    zIndex: 100,
                }}
                label="Segnala un Problema"
            /> */}
        </>
    );
}
