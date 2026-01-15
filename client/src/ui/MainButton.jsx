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
            }}
        >
            {label}
        </Button>
    );
}
