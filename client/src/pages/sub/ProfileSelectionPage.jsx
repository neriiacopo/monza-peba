import { useState, useEffect, useRef, useMemo, use } from "react";
import {
    Box,
    Chip,
    Typography,
    IconButton,
    Stack,
    Divider,
} from "@mui/material";

import { useStore } from "@/store/useStore.jsx";
import { useCookieStore } from "@/store/useCookieStore";

import { profileList } from "@/lib/profiles.config.js";
import { extractLayers } from "@/lib/utils";
import baseSvg from "@/assets/svg/layered/profiles_base.svg?raw";

import ProfileSettings from "@/ui/profiles/ProfileSettings.jsx";

import ShadowBox from "@/ui/ShadowBox.jsx";
import Spacer from "@/ui/Spacer.jsx";
import FullWButton from "@/ui/FullWButton";

import TuneIcon from "@mui/icons-material/Tune";

import "@/ui/profiles/character.css";
import ProfileCard from "@/ui/profiles/ProfileCard";

export default function ProfileSelectionPage({ theme, ...props }) {
    const profile = useStore((s) => s.selectedProfile);
    const [settings, setSettings] = useState(() => ({ ...profile.params }));
    const [customFlag, setCustomFlag] = useState(false);
    const setProfile = useStore((s) => s.setProfile);
    const setProfileData = useCookieStore((s) => s.setProfileData);

    const [confirm, setConfirm] = useState(false);

    const total = profileList.length;
    const [info, setInfo] = useState(useStore.getState().subpage || "desc");
    const slideRef = useRef(null);
    const [sMaxH, setSMaxH] = useState(0);

    // Unmounting logic with restoration or confirmation
    useEffect(() => {
        useStore.setState({ prevProfile: profile });

        return () => {
            const tempProfile = useStore.getState().prevProfile;
            setProfile(tempProfile);
            // Store for Cookies
            setProfileData(tempProfile);
        };
    }, []);

    useEffect(() => {
        if (confirm) {
            const acceptedProfile = {
                ...profile,
                params: { ...settings },
                custom: customFlag,
            };

            console.log("acceptedProfile:", acceptedProfile);

            // overwrite prevProfile
            useStore.setState({
                prevProfile: acceptedProfile,
                page: "map",
            });
        }
    }, [confirm]);

    useEffect(() => {
        // whenever profile changes, reset local editable settings
        setSettings({ ...profile.params });
    }, [profile?.id]);

    useEffect(() => {
        if (slideRef.current) {
            const H = slideRef.current.getBoundingClientRect().height;

            setSMaxH(H);
        }
    }, [slideRef]);

    const parsed = useMemo(() => {
        const baseParsed = extractLayers(baseSvg);

        return {
            base: baseParsed.base,
            viewBox: baseParsed.viewBox,
            costumes: profileList.map((p) => ({
                id: p.id,
                label: p.label,
                color: p.color,
                front: extractLayers(p.svg).front,
                back: extractLayers(p.svg).back,
            })),
        };
    }, []);

    // Paging functions
    const accept = () => {
        setConfirm(true);
    };

    const prev = () => {
        const newIndex = profile.id === 0 ? total - 1 : profile.id - 1;
        setProfile(profileList[newIndex]);
    };

    const next = () => {
        const newIndex = profile.id === total - 1 ? 0 : profile.id + 1;
        setProfile(profileList[newIndex]);
    };

    // Gesture functions
    const startXRef = useRef(null);
    const startYRef = useRef(null);
    const pointerIdRef = useRef(null);
    const lockedRef = useRef(false);

    const SWIPE_MIN_PX = 35;
    const VERTICAL_TOL_PX = 25;

    const onPointerDown = (e) => {
        if ((e.pointerType === "mouse" && e.button !== 0) || info === "stats")
            return;

        pointerIdRef.current = e.pointerId;
        startXRef.current = e.clientX;
        startYRef.current = e.clientY;
        lockedRef.current = false;

        e.currentTarget.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e) => {
        if ((e.pointerType === "mouse" && e.button !== 0) || info === "stats")
            return;

        if (pointerIdRef.current == null) return;
        if (e.pointerId !== pointerIdRef.current) return;
        if (lockedRef.current) return;

        const dx = e.clientX - startXRef.current;
        const dy = e.clientY - startYRef.current;

        if (Math.abs(dy) > VERTICAL_TOL_PX && Math.abs(dy) > Math.abs(dx)) {
            lockedRef.current = true;
            return;
        }

        if (Math.abs(dx) >= SWIPE_MIN_PX && Math.abs(dx) > Math.abs(dy)) {
            lockedRef.current = true;
            if (dx < 0) next();
            else prev();
        }
    };

    const endSwipe = () => {
        pointerIdRef.current = null;
        startXRef.current = null;
        startYRef.current = null;
        lockedRef.current = false;
    };

    return (
        <>
            <ShadowBox
                focus={true}
                outlined={true}
                light={info === "desc" ? false : true}
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // padding: theme.grid.spacing,
                    py: 2.5,
                    px: 1.5,
                    position: "relative",
                    transition: "background-color 0.3s ease-in-out",
                    pointerEvents: "auto",
                    ...props.sx,
                }}
            >
                <IconButton
                    variant="mini"
                    // variant={"inverted"}
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        zIndex: 10,
                    }}
                    onClick={() => setInfo(info === "desc" ? "stats" : "desc")}
                >
                    <TuneIcon />
                </IconButton>
                <Spacer
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 0,
                        maxWidth: "60%",
                        overflow: "hidden",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            // fontSize: 22,
                            lineHeight: 1.1,
                            // mb: 1,
                            textAlign: "center",
                        }}
                    >
                        {profile ? profile.label : ""}
                    </Typography>
                </Spacer>

                <Box
                    ref={slideRef}
                    sx={{
                        flexGrow: 1,
                        position: "relative",
                        width: "100%",
                        touchAction: "pan-y",
                        userSelect: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        overflow: "auto",
                    }}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={endSwipe}
                    onPointerCancel={endSwipe}
                >
                    {info === "desc" ? (
                        <>
                            <Box
                                sx={{
                                    // flexGrow: 1,
                                    height: "50%",
                                    maxHeight: "50%",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                                className={"anim-lines"}
                            >
                                <ProfileCard
                                    baseSvg={parsed.base}
                                    profilesSvg={parsed.costumes}
                                    viewBox={parsed.viewBox}
                                    index={profile.id}
                                    color={theme.palette.primary.main}
                                />
                            </Box>

                            <ShadowBox
                                outlined={false}
                                light={false}
                                sx={{
                                    // flexGrow: 1,
                                    width: "100%",
                                    my: theme.grid.spacing,
                                    p: theme.grid.spacing,
                                }}
                            >
                                <Typography
                                    sx={{
                                        m: theme.grid.spacing,
                                        textAlign: "justify",
                                        // textJustify: "inter-word",
                                    }}
                                >
                                    {profile.desc}
                                </Typography>
                            </ShadowBox>
                        </>
                    ) : (
                        <>
                            <ShadowBox
                                outlined={false}
                                sx={{
                                    flexGrow: 1,
                                    width: "100%",
                                    // p: theme.grid.spacing,
                                    p: 2,
                                    overflowY: "scroll",
                                    maxHeight: sMaxH ? sMaxH : "0px",
                                    position: "relative",
                                }}
                            >
                                <ProfileSettings
                                    settings={settings}
                                    setSettings={setSettings}
                                    setCustomFlag={setCustomFlag}
                                    theme={theme}
                                    profile={profile}
                                />
                            </ShadowBox>
                        </>
                    )}
                </Box>

                <PagingFooter
                    theme={theme}
                    prev={prev}
                    next={next}
                    accept={accept}
                />
            </ShadowBox>
        </>
    );
}

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function PagingFooter({ theme, prev, next, accept }) {
    return (
        <Stack
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                mt: theme.grid.spacing,
            }}
        >
            <IconButton
                onClick={prev}
                variant={"mini"}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <FullWButton
                label={"Conferma"}
                sx={{ width: "50%" }}
                onClick={accept}
            />
            <IconButton
                onClick={next}
                variant={"mini"}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Stack>
    );
}
