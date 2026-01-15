import { Button } from "@mui/material";

import { useTheme } from "@mui/material";

export default function FullWButton({ label, ...props }) {
    const theme = useTheme();
    return (
        <Button
            fullWidth
            onClick={props?.onClick}
            variant="contained"
            disabled={props?.disabled}
            sx={{
                borderRadius: "999px",
                py: 1.25,
                textTransform: "none",
                fontWeight: 600,
                bgcolor: theme.palette.primary.main,
                boxShadow: "none",
                "&:hover": {
                    bgcolor: theme.palette.primary.main,
                    opacity: 0.92,
                    boxShadow: "none",
                },
                ...props.sx,
            }}
        >
            {label}
        </Button>
    );
}
