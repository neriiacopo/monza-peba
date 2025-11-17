import { useTheme } from "@mui/material";
import { Box } from "@mui/material";

export default function Spacer({ unit = 1, children, ...props }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100%",
                marginY: theme.grid.spacing,
                height: `${theme.grid.units.h * unit}px`,
                ...props.sx,
            }}
        >
            {children}
        </Box>
    );
}
