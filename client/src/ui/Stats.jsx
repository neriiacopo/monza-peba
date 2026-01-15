import { Chip, Stack, IconButton, Badge, Icon, Fade } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";

import CustomIcon from "@/ui/CustomIcon";

import { useStore } from "@/store/useStore.jsx";

export default function Stats() {
    const theme = useTheme();
    const stats = useStore((s) => s.stats);
    const alerts = useStore((s) => s.alerts);

    const [fxKey, setFxKey] = useState(0);
    useEffect(() => {
        if (stats) setFxKey((k) => k + 1);
    }, [stats]);

    return (
        <>
            {/* Path length */}

            <Fade
                in={Boolean(stats?.overview)}
                timeout={{ enter: 250, exit: 200 }}
                key={`overview-${fxKey}`}
            >
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 10,
                        pointerEvents: "none",
                        padding: theme.grid.spacing,
                        marginB: theme.grid.spacing,
                    }}
                >
                    {stats &&
                        stats?.overview &&
                        [...Object.keys(stats.overview)].map((key) => {
                            const overview = stats.overview;
                            const labels = {};
                            return (
                                <Chip
                                    key={key}
                                    sx={{
                                        textAlign: "left",
                                        textJustify: "left",
                                    }}
                                    label={`${
                                        key == "baseline"
                                            ? "Rapido"
                                            : "Accessibile"
                                    }: ${overview[key].total_length} m`}
                                ></Chip>
                            );
                        })}
                </Stack>
            </Fade>
            <Fade
                in={Boolean(stats?.overview)}
                timeout={{ enter: 250, exit: 200 }}
                // unmountOnExit
                key={`btns-${fxKey}`}
            >
                {/* Button Alerts */}
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        zIndex: 10,
                        pointerEvents: "none",
                    }}
                >
                    {stats == null ? (
                        <Chip label={"Calcola percorso per vedere info"} />
                    ) : (
                        <Stack
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                zIndex: 1000,
                                color: theme.palette.primary.main,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                pointerEvents: "auto",
                            }}
                        >
                            {stats &&
                                stats?.alerts &&
                                [...Object.keys(stats.alerts)].map((key) => {
                                    const alert = stats.alerts[key];
                                    return (
                                        <Badge
                                            key={key}
                                            badgeContent={`${alert.total}`}
                                            color="primary"
                                            overlap="circular"
                                        >
                                            <IconButton
                                                variant={
                                                    alerts[key].visible
                                                        ? "mini"
                                                        : "inverted-mini"
                                                }
                                                sx={{ zIndex: 1000 }}
                                                onClick={() => {
                                                    useStore.setState(
                                                        (state) => ({
                                                            alerts: {
                                                                ...state.alerts,
                                                                [key]: {
                                                                    ...state
                                                                        .alerts[
                                                                        key
                                                                    ],
                                                                    visible:
                                                                        !state
                                                                            .alerts[
                                                                            key
                                                                        ]
                                                                            .visible,
                                                                },
                                                            },
                                                        })
                                                    );
                                                }}
                                            >
                                                <CustomIcon type={key} />
                                            </IconButton>
                                        </Badge>
                                    );
                                })}
                        </Stack>
                    )}
                </Stack>
            </Fade>
        </>
    );
}
