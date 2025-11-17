import { useStore } from "@/store/useStore.jsx";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import getTheme from "@/ui/theme.js";

import { Box } from "@mui/material";

import MainPage from "@/pages/MainPage.jsx";
import LandingPage from "@/pages/LandingPage.jsx";
// import ProfileSelectionPage from "./pages/ProfileSelectionPage.jsx";
import WanderingPaths from "@/ui/WanderingPaths.jsx";

export default function App() {
    const prevSession = useStore((state) => state.prevSession);
    const profile = useStore((state) => state.profile);
    const mainColor = useStore((state) => state.mainColor);
    const theme = getTheme(mainColor);
    const page = useStore((state) => state.page);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100dvh",
                        width: "100%",
                        p: theme.mainContainerPadding, // outer white border
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        // backgroundColor: theme.palette.background.main,
                        zIndex: 0,
                    }}
                >
                    {/* {page == "map" && <MainPage theme={theme} />}
                    {page == "profiles" && (
                        <ProfileSelectionPage theme={theme} />
                    )} */}
                    {page != "landing" && <MainPage theme={theme} />}
                    {page == "landing" && <LandingPage theme={theme} />}

                    <WanderingPaths
                        thickness={20}
                        opacity={
                            page == "landing" ? 1 : page == "profiles" ? 0.5 : 0
                        }
                    />
                </Box>
            </CssBaseline>
        </ThemeProvider>
    );
}
