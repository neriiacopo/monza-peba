import { Box, Typography } from "@mui/material";

export default function Section({ title, description, children }) {
    return (
        <>
            <Box
                sx={{
                    mb: 1,
                    pointerEvents: "auto",
                    width: "100%",
                    textAlign: "left",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ lineHeight: 1.1, mb: 1 }}
                >
                    {title}
                </Typography>
                <Typography sx={{ fontSize: 13, lineHeight: 1.35, mb: 1.5 }}>
                    {description}
                </Typography>
            </Box>
            {children}
        </>
    );
}
