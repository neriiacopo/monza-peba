import { Button } from "@mui/material";
import { useTheme } from "@mui/material";

export default function MainButton({ label, ...props }) {
    const theme = useTheme();

    return (
        <Button
            {...props}
            sx={{
                width: "50%",
                // height: `${theme.grid.units.h - 2}px`,
                borderRadius: theme.brdRad,
                border: "none",
                // outline: "2px solid" + theme.palette.primary.main,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
            }}
        >
            {label}
        </Button>
    );
}
