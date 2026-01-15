import { useStore } from "@/store/useStore.jsx";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import getTheme from "@/ui/theme.js";

import { Box, Fade } from "@mui/material";

import MainPage from "@/pages/MainPage.jsx";
import MapBackgroundDesktop from "@/ui/MapBackgroundDesktop.jsx";
import WanderingPaths from "@/ui/WanderingPaths.jsx";

export default function App() {
    const selectedProfile = useStore((s) => s.selectedProfile);

    const theme = getTheme(selectedProfile);
    const page = useStore((s) => s.page);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100dvh",
                        maxHeight: "100dvh",
                        width: "100%",
                        p: theme.mainContainerPadding, // outer white border
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: page === "map" ? "flex-start" : "center",
                        backgroundColor: theme.palette.background.main,
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                >
                    <MainPage theme={theme} />

                    {page !== "landing" && !theme.isMobile && (
                        <Fade
                            in={true}
                            timeout={500}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: -1,
                                    p: theme.mainContainerPadding,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        zIndex: 1,
                                        pointerEvents:
                                            page == "map" ? "none" : "auto",
                                        visibility:
                                            page == "map"
                                                ? "hidden"
                                                : "visible",
                                    }}
                                ></Box>
                                <MapBackgroundDesktop theme={theme} />
                            </Box>
                        </Fade>
                    )}

                    <WanderingPaths
                        start={page == "landing"}
                        thickness={20}
                        n={30}
                        maxLength={200}
                    />
                </Box>
            </CssBaseline>
        </ThemeProvider>
    );
}
