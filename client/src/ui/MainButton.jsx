import { Button } from "@mui/material";

export default function MainButton({ label, variant = "default", ...props }) {
    return (
        <Button
            variant={variant}
            {...props}
            sx={{
                width: "100%",
                height: "auto",
                minHeight: "auto",

                ...props.sx,
                "&:hover": {
                    // bgcolor: theme.palette.primary.main,
                    opacity: 0.92,
                    boxShadow: "none",
                },
            }}
        >
            {label}
        </Button>
    );
}
