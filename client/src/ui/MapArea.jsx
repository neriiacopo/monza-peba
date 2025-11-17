import { Button } from "@mui/material";

import ShadowBox from "./ShadowBox";
import Basemap from "../map/Basemap";
import VizSelection from "./VizSelection";
import MainButton from "./MainButton";

export default function MapArea({ theme, initMap }) {
    const pathOptions = ["Distanza", "Pendenza", "Larghezza", "Incidenti"];

    return (
        <ShadowBox
            focus
            sx={{
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                marginY: theme.grid.spacing,
                // height: `${theme.grid.units.h * 9}px`,
                flexGrow: 1,
            }}
        >
            <VizSelection
                theme={theme}
                options={pathOptions}
            />

            <MainButton
                sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    zIndex: 10,
                }}
                label="Segnala un Problema"
            />
            {initMap && <Basemap mainColor={theme.palette.primary.main} />}
        </ShadowBox>
    );
}
