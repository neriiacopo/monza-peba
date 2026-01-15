import { paramsDescriptions } from "@/lib/profiles.config.js";
import {
    ToggleButtonGroup,
    ToggleButton,
    Slider,
    Box,
    Divider,
    Typography,
    Chip,
    Stack,
    SvgIcon,
    IconButton,
} from "@mui/material";

import { useIcon } from "@/assets/useIcon";

export default function ProfileSettings({
    settings,
    setSettings,
    setCustomFlag,
    theme,
}) {
    const setField = (fieldId, nextValue) => {
        setSettings((prev) => ({
            ...prev,
            [fieldId]: nextValue,
        }));
        setCustomFlag(true);
    };

    const renderToggleGroup = (field) => {
        const optionKeys = Object.keys(field.options ?? {});
        const selected = Array.isArray(settings?.[field.id])
            ? settings[field.id]
            : [];

        const handleChange = (_event, nextSelected) => {
            setField(field.id, Array.isArray(nextSelected) ? nextSelected : []);
        };

        return (
            <Box
                key={field.id}
                sx={{ mb: 2, width: "100%" }}
            >
                {field.label && (
                    <Typography sx={{ fontSize: 14, mb: 0.5 }}>
                        {field.label}
                    </Typography>
                )}

                {field.desc && (
                    <Typography sx={{ fontSize: 12.5, opacity: 0.85, mb: 1 }}>
                        {field.desc}
                    </Typography>
                )}

                <ToggleButtonGroup
                    value={selected}
                    onChange={handleChange}
                    aria-label={field.label ?? field.id}
                    size="small"
                    fullWidth
                >
                    {optionKeys.map((k, y) => (
                        <ToggleButton
                            key={k}
                            value={k}
                            aria-label={k}
                            sx={{
                                borderRadius: "9999px",
                                color: theme.palette.text.primary,
                                textTransform: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <IconButton
                                component="span"
                                variant={"inverted-mini"}
                                sx={{ mr: 1, pointerEvents: "none" }}
                            >
                                <SvgIcon
                                    component={useIcon(
                                        optionKeys[y] == "STEPS"
                                            ? "steps"
                                            : "stairs"
                                    )}
                                    inheritViewBox
                                    sx={{
                                        width: "100%",
                                        height: "100%",

                                        "& path, & polygon": {
                                            fill: "inherit",
                                        },
                                    }}
                                />
                            </IconButton>
                            <Typography sx={{ fontSize: 14, mr: 1.5 }}>
                                {field.options[k].label ?? k}
                            </Typography>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Box>
        );
    };

    const renderSlider = (field) => {
        const min = field.min ?? (field.minmax ? field.minmax[0] : 0);
        const max = field.max ?? (field.minmax ? field.minmax[1] : 1);
        const step = field.step ?? 0.1;
        const unit = field.unit ?? "";

        const value =
            typeof settings?.[field.id] === "number"
                ? settings[field.id]
                : field.default ?? min;

        const handleChange = (_e, newValue) => {
            const next = Array.isArray(newValue) ? newValue[0] : newValue;
            setField(field.id, next);
        };

        return (
            <Box
                key={field.id}
                sx={{ mb: 2, pr: 2 }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: 2,
                        mb: 0.5,
                    }}
                >
                    <Typography sx={{ fontSize: 14 }}>
                        {field.label ?? field.id}
                    </Typography>

                    <Typography sx={{ fontSize: 13, opacity: 0.9 }}>
                        {Number.isFinite(value) ? value : ""}
                        {unit ? ` ${unit}` : ""}
                    </Typography>
                </Box>

                {field.desc && (
                    <Typography sx={{ fontSize: 12.5, opacity: 0.85, mb: 1 }}>
                        {field.desc}
                    </Typography>
                )}

                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <IconButton
                        variant={"inverted-mini"}
                        sx={{ mr: 2.5, pointerEvents: "none" }}
                    >
                        <SvgIcon
                            component={useIcon(field.id)}
                            inheritViewBox
                            sx={{
                                width: "100%",
                                height: "100%",

                                "& path, & polygon": {
                                    fill: "inherit",
                                },
                            }}
                        />
                    </IconButton>
                    <Stack
                        sx={{
                            display: "flex",
                            flexGrow: 1,
                            flexDirection: "column",
                        }}
                    >
                        <Slider
                            value={value}
                            onChange={handleChange}
                            min={min}
                            max={max}
                            step={step}
                            // valueLabelDisplay="auto"
                            valueLabelFormat={(v) => (unit ? `${v}${unit}` : v)}
                        />

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: -1,
                            }}
                        >
                            <Typography sx={{ fontSize: 11.5, opacity: 0.7 }}>
                                {min}
                                {unit}
                            </Typography>
                            <Typography sx={{ fontSize: 11.5, opacity: 0.7 }}>
                                {max}
                                {unit}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        );
    };

    const renderField = (field) => {
        if (field.type === "toggleGroup") return renderToggleGroup(field);
        if (field.type === "slider") return renderSlider(field);
        return (
            <Box
                key={field.id}
                sx={{ mb: 2 }}
            />
        );
    };

    return (
        <>
            {paramsDescriptions.map((group, i) => (
                <Box
                    key={group.id ?? i}
                    sx={{ mb: 1, pointerEvents: "auto" }}
                >
                    <Typography
                        variant="h6"
                        sx={{ lineHeight: 1.1, mb: 1 }}
                    >
                        {group.title}
                    </Typography>

                    <Typography
                        sx={{ fontSize: 13, lineHeight: 1.35, mb: 1.5 }}
                    >
                        {group.desc}
                    </Typography>

                    {group.fields.map(renderField)}

                    {paramsDescriptions.length - 1 !== i && (
                        <Divider
                            sx={{
                                borderColor: theme.palette.primary.main,
                                opacity: 0.65,
                                mb: 1.5,
                            }}
                        />
                    )}
                </Box>
            ))}
        </>
    );
}
