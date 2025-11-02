import { Box, IconButton, Link, Typography } from "@mui/material";
import ShadowBox from "./ShadowBox.jsx";

export default function AddressInput({
    theme,
    label = "Da",
    placeholder = "Seleziona una Destinazione",
}) {
    return (
        <ShadowBox
            outlined={false}
            sx={{
                height: `${theme.grid.units.h}px`,
                marginY: theme.grid.spacing,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <IconButton disabled={true}>
                <Typography>{label}</Typography>
            </IconButton>
            <ShadowBox
                sx={{
                    height: "100%",
                    marginLeft: theme.grid.spacing,
                    borderRadius: theme.brdRad,
                    flexGrow: 1,
                    backgroundColor: theme.palette.primary.secondary,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: theme.offRad,
                }}
                focus={true}
            >
                <Typography>{placeholder}</Typography>
            </ShadowBox>
        </ShadowBox>
    );
}
