import { Box, Typography, Divider } from "@mui/material";

export default function Section({
    theme,
    title,
    description,
    children,
    last = false,
}) {
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
            {!last && (
                <Divider
                    sx={{
                        borderColor: theme.palette.primary.main,
                        opacity: 0.65,
                        mb: 1.5,
                        width: "100%",
                    }}
                />
            )}
        </>
    );
}
