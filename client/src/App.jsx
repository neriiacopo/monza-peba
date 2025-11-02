import { useStore } from "@/store/useStore.jsx";
import { useEffect, useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getBbox } from "@/lib/api";
import getTheme from "./ui/theme.js";

import { Box } from "@mui/material";
import Banner from "./ui/Banner.jsx";
import AddressInput from "./ui/AddressInput.jsx";
import Footer from "./ui/Footer.jsx";
import Basemap from "./map/Basemap.jsx";
import ShadowBox from "./ui/ShadowBox.jsx";

export default function App() {
    const prevSession = useStore((state) => state.prevSession);
    const mainColor = useStore((state) => state.mainColor);
    const profile = useStore((state) => state.profile);
    const theme = getTheme(profile);
    const page = useStore((state) => state.page);

    const [initMap, setInitMap] = useState(false);
    const margin = "4vw";

    useEffect(() => {
        async function fetchBbox() {
            try {
                const data = await getBbox({});
                useStore.setState({ bbox: data.bbox });
                setInitMap(true);
            } catch (err) {
                console.error("Error fetching bbox:", err);
            }
        }

        fetchBbox();
    }, []);

    const hUs = [1, 1, 1, 9, 1];
    const colors = ["red", "silver", "green", "yellow", "purple"];

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
                    {/* Banner */}
                    <Banner />

                    {/* Input 1 */}
                    <AddressInput
                        theme={theme}
                        label="Da"
                        placeholder="Seleziona origine"
                    />

                    {/* Input 2 */}
                    <AddressInput
                        theme={theme}
                        label="A"
                        placeholder="Seleziona destinazione"
                    />

                    {/* Map Area */}
                    <ShadowBox
                        sx={{
                            overflow: "hidden",
                            position: "relative",

                            marginY: theme.grid.spacing,
                            height: `${theme.grid.units.h * 9}px`,
                        }}
                    >
                        {initMap && <Basemap />}
                    </ShadowBox>

                    {/* Footer */}
                    <Footer />
                </Box>
            </CssBaseline>
        </ThemeProvider>
    );
}
