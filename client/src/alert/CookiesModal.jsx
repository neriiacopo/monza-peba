import React, { useMemo, useState, useEffect, Fragment } from "react";
import {
    Box,
    Typography,
    Divider,
    Switch,
    Button,
    FormControlLabel,
    Modal,
    Stack,
    Fade,
    Slide,
} from "@mui/material";

import { useStore } from "@/store/useStore";
import { useCookieStore } from "@/store/useCookieStore";

import MarkdownContent from "@/ui/MarkdownContent";
import ShadowBox from "@/ui/ShadowBox.jsx";
import MainButton from "@/ui/MainButton.jsx";
import FullWButton from "@/ui/FullWButton.jsx";

export default function CookiesModal({ theme }) {
    const hasDecided = useCookieStore((s) => s.hasDecided());
    const open = useStore((state) => state.modalCookies);

    const accent = theme.palette.primary.main;

    const storedPermissions = useCookieStore((s) => s.permissions);
    const acceptAllCookies = useCookieStore((s) => s.acceptAll);
    const saveCookies = useCookieStore((s) => s.save);

    // local UI state starts from store (persistent)
    const [permissions, setPermissions] = useState(storedPermissions);

    // keep local state in sync if store changes (rare, but good)
    useEffect(() => {
        setPermissions(storedPermissions);
    }, [storedPermissions]);

    // toggle only local
    const toggle = (key) =>
        setPermissions((prev) => ({
            ...prev,
            [key]: { ...prev[key], accepted: !prev[key].accepted },
        }));

    // accept all = store + close
    const setAllLocal = (value) =>
        setPermissions((prev) =>
            Object.fromEntries(
                Object.entries(prev).map(([k, v]) => [
                    k,
                    { ...v, accepted: value },
                ])
            )
        );

    const onAcceptAll = () => {
        setAllLocal(true);
        setTimeout(() => {
            acceptAllCookies();
            useStore.setState({ modalCookies: false });
        }, 500);
    };

    const infoText =
        "Utilizziamo i cookies per migliorare la tua esperienza e per raccogliere dati anonimi sull’utilizzo dell’app. Continuando a usare tracce, accetti la nostra informativa sui cookie. Per più informazioni consulta i paragrafi qui di seguito.";

    return (
        <Modal
            open={open}
            aria-labelledby="alert-modal-title"
            aria-describedby="alert-modal-description"
            sx={{
                display: "grid",
                placeItems: "center",
            }}
        >
            <Slide
                direction="up"
                in={open}
                mountOnEnter
                unmountOnExit
                {...(open ? { timeout: 500 } : {})}
            >
                <Box
                    sx={{
                        width: "min(420px, 92vw)",
                        border: `2px solid ${accent}`,
                        borderRadius: theme.brdRad,
                        p: 2.5,
                        color: accent,
                        position: "relative",
                        backgroundColor: theme.palette.secondary.main,
                        boxShadow: `0 2px 6px ${accent}55`,
                        maxHeight: "80dvh",
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            // fontSize: 22,
                            lineHeight: 1.1,
                            mb: 1,
                        }}
                    >
                        Normativa relativa <br /> ai Cookies
                    </Typography>
                    <Typography
                        sx={{ fontSize: 13, lineHeight: 1.35, mb: 1.5 }}
                    >
                        {infoText}
                    </Typography>
                    <Divider
                        sx={{ borderColor: accent, opacity: 0.65, mb: 1.5 }}
                    />

                    {Object.entries(permissions).map(([key, data]) => (
                        <Fragment key={key}>
                            <CollapsableSection
                                title={data.label}
                                filename={data.filename}
                                theme={theme}
                            />

                            <Divider
                                sx={{
                                    borderColor: accent,
                                    opacity: 0.65,
                                    mb: 1.5,
                                }}
                            />
                        </Fragment>
                    ))}

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.1,
                            mb: 2,
                        }}
                    >
                        {Object.entries(permissions).map(([key, data]) => (
                            <Box
                                key={key}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ fontSize: 13 }}>
                                    {data.clause}
                                </Typography>

                                <FormControlLabel
                                    sx={{ m: 0 }}
                                    control={
                                        <Switch
                                            checked={data.accepted || false}
                                            onChange={() => toggle(key)}
                                            disableRipple
                                            sx={{
                                                "& .MuiSwitch-switchBase": {
                                                    color: accent,
                                                },

                                                "& .MuiSwitch-track": {
                                                    backgroundColor: "#EAEAEA",
                                                    opacity: 1,
                                                },
                                            }}
                                        />
                                    }
                                    label=""
                                />
                            </Box>
                        ))}
                    </Box>
                    <FullWButton
                        onClick={onAcceptAll}
                        label="Accetta tutti i Cookies"
                    />
                </Box>
            </Slide>
        </Modal>
    );
}

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function CollapsableSection({ title, content, theme, filename }) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Box>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    cursor: "pointer",
                }}
                onClick={() => setCollapsed(!collapsed)}
            >
                <Typography
                    variant="h6"
                    sx={{
                        lineHeight: 1.1,
                        mb: 1,
                    }}
                >
                    {title}
                </Typography>
                {collapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Stack>
            <ShadowBox
                light={true}
                outlined={false}
                sx={{
                    px: collapsed ? 0 : 2,
                    py: collapsed ? 0 : 1,
                    my: collapsed ? 0 : 1,
                    maxHeight: collapsed ? 0 : "auto",
                    overflow: "hidden",
                }}
            >
                <MarkdownContent filename={filename} />
            </ShadowBox>
        </Box>
    );
}
