import { useStore } from "@/store/useStore.jsx";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import getTheme from "./ui/theme.js";

import { Box } from "@mui/material";

import MainPage from "./pages/MainPage.jsx";
// import ProfileSelectionPage from "./pages/ProfileSelectionPage.jsx";

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
                        height: "100%",
                        width: "100%",
                        p: theme.mainContainerPadding, // outer white border
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: theme.palette.background.main,
                    }}
                >
                    {/* {page == "map" && <MainPage theme={theme} />}
                    {page == "profiles" && (
                        <ProfileSelectionPage theme={theme} />
                    )} */}
                    <MainPage theme={theme} />
                </Box>
            </CssBaseline>
        </ThemeProvider>
    );
}
