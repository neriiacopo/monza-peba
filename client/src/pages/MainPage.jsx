import { useEffect, useState } from "react";
import { Fade, Box } from "@mui/material";

import ProfileSelectionPage from "./sub/ProfileSelectionPage.jsx";
import MapPage from "./sub/MapPage.jsx";
import MapPageDesktop from "./sub/MapPageDesktop.jsx";
import ReportPage from "./sub/ReportPage.jsx";
import LandingPage from "./sub/LandingPage.jsx";

import Banner from "@/ui/Banner.jsx";
import Footer from "@/ui/Footer.jsx";
import AlertModal from "@/alert/AlertModal.jsx";
import CookiesModal from "@/alert/CookiesModal.jsx";

import { useStore } from "@/store/useStore.jsx";

export default function MainPage({ theme }) {
    const page = useStore((s) => s.page);

    return (
        <>
            {/* Banner */}
            <Banner />

            <Fade
                in={true}
                timeout={500}
                key={page}
            >
                <Box
                    sx={{
                        flexGrow: 1,

                        // width: "100%",
                        width: theme.isMobile ? "100%" : "420px",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        justifyContent: "center",
                        alignItems: "center",
                        pointerEvents: "none",
                    }}
                >
                    {page == "landing" && <LandingPage theme={theme} />}
                    {page == "profiles" && (
                        <ProfileSelectionPage theme={theme} />
                    )}
                    {page == "map" &&
                        (theme.isMobile ? (
                            <MapPage theme={theme} />
                        ) : (
                            <MapPageDesktop theme={theme} />
                        ))}
                    {page == "report" && <ReportPage theme={theme} />}
                </Box>
            </Fade>

            {/* Footer */}
            <Footer />
            <AlertModal theme={theme} />
            <CookiesModal theme={theme} />
        </>
    );
}
