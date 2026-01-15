import { useStore } from "@/store/useStore.jsx";
import {
    Box,
    Typography,
    Badge,
    Fade,
    Stack,
    SvgIcon,
    IconButton,
    Chip,
} from "@mui/material";
import { darken } from "@mui/material/styles";

import { useState, useEffect } from "react";
import { profileList } from "@/lib/profiles.config.js";

import { ThemeContext, useTheme } from "@emotion/react";
import { useIcon } from "../../assets/useIcon";

import Spacer from "@/ui/Spacer.jsx";
import MainButton from "@/ui/MainButton";

export default function LandingPage({ ...props }) {
    const [pageId, setPageId] = useState(0);
    const theme = useTheme();

    return (
        <>
            {/* <Fade
                in={true}
                timeout={1000}
            > */}
            <Box
                style={{
                    position: "relative",
                    width: "80%",
                    flexGrow: 1,
                    backgroundColor: "transparent",
                    border: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: 2,
                    textAlign: "center",
                    zIndex: 100,
                    ...props.sx,
                }}
            >
                {pageId === 0 ? (
                    <PageOne
                        theme={theme}
                        forward={() => setPageId(1)}
                    />
                ) : pageId === 1 ? (
                    <PageTransition
                        theme={theme}
                        forward={() =>
                            useStore.setState({
                                page: "profiles",
                                subpage: "desc",
                            })
                        }
                    />
                ) : (
                    <></>
                )}
            </Box>
            {/* </Fade> */}
        </>
    );
}

function PageOne({ theme, forward }) {
    return (
        <>
            <Box sx>
                <Badge badgeContent={"Monza"}>
                    <Typography
                        variant="h2"
                        sx={{ fontWeight: "medium" }}
                    >
                        Tracce
                    </Typography>
                </Badge>
            </Box>
            <Typography variant="h5">
                Muoviti liberamente, chiunque tu sia
            </Typography>
            <Typography variant="p">
                Tracce nasce per rendere la città accessibile a tutti: persone
                con disabilità motorie, anziani, genitori con passeggino e altri
                ancora!
            </Typography>
            <Typography variant="p">
                Scopri percorsi sicuri, senza barriere, adatti alle tue esigenze
                quotidiane.
            </Typography>
            <Box sx={{ width: "100%" }}>
                <Spacer
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <MainButton
                        variant={"inverted"}
                        label={"Come funziona?"}
                        component="a"
                        onClick={() => {}}
                        href="https://transformtransport.org/research/inclusive-mobility/icts-in-support-of-monzas-peba-plan-for-eliminating-architectural-barriers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ maxHeight: "75%" }}
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
                        sx={{ maxHeight: "75%" }}
                        onClick={() => forward()}
                    />
                </Spacer>
            </Box>
        </>
    );
}

import { useCookieStore } from "@/store/useCookieStore";

function PageTransition({ theme, forward }) {
    const profiles = useStore((s) => s.profiles);
    const setProfile = useStore((s) => s.setProfile);
    const cookiescheck = useCookieStore((s) => s.hasDecided());

    useEffect(() => {
        if (!cookiescheck) {
            setTimeout(() => {
                useStore.setState({ modalCookies: true });
            }, 500);
        }
    }, []);

    return (
        <>
            <Typography variant="h5">
                La stessa città, esigenze diverse
            </Typography>
            {/* <Typography variant="p">
                Ogni persona vive lo spazio urbano in modo differente. Per
                questo Tracce non propone un unico percorso, ma li calcola in
                base alle tue necessità.
            </Typography> */}
            <Typography variant="p">
                Seleziona il profilo che meglio rappresenta come ti muovi oggi.
                Gradini, pendenze, larghezze e ostacoli verranno valutati in
                modo diverso per costruire percorsi davvero accessibili.
            </Typography>

            {/* <MainButton
                label={"Compreso"}
                sx={{ maxHeight: "75%" }}
                onClick={() => {
                                setProfile(0);
                                forward();
                            }}
            /> */}

            <Stack
                direction="column"
                spacing={2}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    p: 0,
                }}
            >
                {profileList.map((p, i) => {
                    return (
                        <Stack
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 9999,
                                cursor: "pointer",
                            }}
                            key={i}
                            onClick={() => {
                                setProfile(p);
                                forward();
                            }}
                        >
                            <MainButton
                                label={p.label}
                                sx={{
                                    maxHeight: "100%",
                                    // color: "white",
                                    // color: "black",

                                    // borderColor: p.color,
                                    // color: p.color,
                                    // backgroundColor:
                                    //     theme.palette.secondary.main,

                                    borderColor: p.color,
                                    color: theme.palette.secondary.main,
                                    backgroundColor: p.color,
                                    boxShadow: `0 2px 6px ${p.color}55`,
                                    "&:focus": {
                                        backgroundColor: darken(p.color, 0.15),
                                    },
                                    "&:hover": {
                                        backgroundColor: darken(p.color, 0.15),
                                    },
                                }}
                            />
                        </Stack>
                    );
                })}
            </Stack>
        </>
    );
}

function CharacterIcon({ p, theme }) {
    return (
        <>
            <IconButton
                // variant={"inverted"}
                sx={{
                    backgroundColor: p.color,
                    // width: `100%`,
                    // height: `100%`,
                    // marginLeft:
                    //     index === 0 ? 0 : theme.grid.spacing,
                    borderRadius: theme.brdRad,
                    // visibility: btn.visible
                    //     ? "visible"
                    //     : "hidden",
                }}
            >
                <SvgIcon
                    component={useIcon(p.lbl)}
                    inheritViewBox
                    sx={{
                        width: "100%",
                        height: "100%",
                        "& path, & polygon": {
                            fill: "black",
                        },
                    }}
                />
            </IconButton>

            {/* <Chip
                                // label={<Typography>{p.label}</Typography>}
                                label={p.label}
                                sx={{
                                    mr: theme.grid.spacing,
                                    backgroundColor: p.color,
                                }}
                            ></Chip> */}
        </>
    );
}
