import { Box, IconButton, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import CookieIcon from "@mui/icons-material/Cookie";

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100%",
                height: `${theme.grid.units.h}px`,
                marginY: theme.grid.spacing,
                borderRadius: theme.brdRad,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    fontSize: "0.8rem",
                }}
            >
                <Link sx={{ fontWeight: "bold" }}>Contattaci</Link>
                <Typography
                    sx={{
                        fontSize: "0.8rem",
                    }}
                >
                    Systematica - Transform Transport
                </Typography>
            </Box>
            <IconButton
                // onClick={btn.action}
                sx={{
                    width: `${theme.iconH}`,
                    height: `${theme.iconH}`,
                }}
            >
                <CookieIcon
                    sx={{
                        width: "60%",
                        height: "60%",
                        color: theme.palette.primary.secondary,
                    }}
                />
            </IconButton>
        </Box>
    );
}
