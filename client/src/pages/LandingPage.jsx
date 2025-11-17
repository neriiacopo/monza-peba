import { useStore } from "@/store/useStore.jsx";
import { Box, Typography, Button } from "@mui/material";

import WanderingPaths from "@/ui/WanderingPaths";
import Spacer from "@/ui/Spacer.jsx";
import GridHelper from "@/ui/GridHelper.jsx";
import MainButton from "@/ui/MainButton";

export default function LandingPage() {
    return (
        <>
            <Box
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100dvh",
                    backgroundColor: "transparent",
                    border: "none",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 3,
                }}
            >
                <Box
                    sx={{
                        width: "80%",
                        height: "70dvh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{ fontWeight: "bold" }}
                    >
                        Tracce
                    </Typography>
                    <Typography variant="h4">
                        Muoviti liberamente, chiunque tu sia
                    </Typography>
                    <Typography variant="p">
                        Tracce nasce per rendere la città accessibile a tutti:
                        persone con disabilità motorie, anziani, genitori con
                        passeggino e altri ancora!
                    </Typography>

                    <Typography variant="p">
                        Scopri percorsi sicuri, senza barriere, adatti alle tue
                        esigenze quotidiane.
                    </Typography>

                    <Spacer
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <MainButton
                            label={"Come funziona?"}
                            component="a"
                            onClick={() => {}}
                            href="https://transformtransport.org/research/inclusive-mobility/icts-in-support-of-monzas-peba-plan-for-eliminating-architectural-barriers/"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </Spacer>

                    <Spacer
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <MainButton
                            label={"Cominciamo!"}
                            onClick={() =>
                                useStore.setState({ page: "profiles" })
                            }
                        />
                    </Spacer>
                </Box>
            </Box>
        </>
    );
}
