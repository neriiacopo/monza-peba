import { useState, useMemo, useRef, useEffect } from "react";
import {
    Autocomplete,
    TextField,
    IconButton,
    Typography,
    createFilterOptions,
    Stack,
    Box,
    Fade,
    Divider,
} from "@mui/material";
import ShadowBox from "./ShadowBox.jsx";
import { checkGpsPositionWithinBoundary } from "@/lib/map.utils.js";
import { useStore } from "@/store/useStore.jsx";
import { formatAddress } from "@/lib/data.utils.js";

import AccessibleIcon from "@mui/icons-material/Accessible";
import NotAccessibleIcon from "@mui/icons-material/NotAccessible";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import GpsActivateIcon from "@mui/icons-material/GpsFixed";

export default function AddressInputAuto({
    theme,
    label = "Da",
    placeholder = "Seleziona una Destinazione",
    idx = 0,
    ...props
}) {
    const inputRef = useRef(null);
    const addresses = useStore((s) => s.geocoder);
    const setMarkers = useStore((s) => s.setMarkers);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [open, setOpen] = useState(false);
    const markers = useStore((state) => state.markers);
    const portalRef = useRef(null);
    const followGps = useStore((s) => s.followGps);

    const handleHideKeyboard = () => {
        inputRef.current?.blur();
    };

    const options = useMemo(() => {
        const results = addresses.map((feature) => ({
            address: formatAddress(feature),
            value: feature.coordinates,
            feature: feature,
        }));

        // Prepend gps position
        return [
            {
                isCurrentLocation: true,
                address: "Posizione attuale",
                value: null,
                feature: {
                    wheelchair: null,
                    coordinates: {
                        lng: null,
                        lat: null,
                    },
                    name: "Posizione attuale",
                },
            },
            ...results,
        ];
    }, [addresses]);

    useEffect(() => {
        if (markers.length === 0 || markers[idx] == null) {
            setValue(null);
            setInputValue("");
        } else {
            setInputValue(markers[idx]?.address);
            setValue({
                address: markers[idx]?.address,
                value: markers[idx]?.coordinates,
                feature: markers[idx]?.feature,
            });
        }
    }, [markers, idx]);

    const filterOptions = (options, params) => {
        const defaultFilter = createFilterOptions({
            limit: 10,
            ignoreCase: true,
            trim: true,
        });
        const filtered = defaultFilter(
            options.filter((opt) => !opt.isCurrentLocation),
            params,
        );

        const currentLocOption = options.find((opt) => opt.isCurrentLocation);
        return [currentLocOption, ...filtered];
    };

    useEffect(() => {
        if (!open) handleHideKeyboard();
    }, [open]);

    return (
        <ShadowBox
            outlined={false}
            sx={{
                height: `${theme.grid.units.h}px`,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                overflowY: "visible",
                zIndex: open ? 1000 : 1,
                position: "relative",
                ...props.sx,
            }}
        >
            <IconButton variant="inactive">
                <Typography>{label}</Typography>
            </IconButton>

            <ShadowBox
                sx={{
                    maxHeight: `calc(${theme.grid.units.h}px - ${theme.grid.spacing})`,
                    marginLeft: theme.grid.spacing,
                    borderRadius: 9999,
                    display: "flex",
                    alignItems: "center",
                    pointerEvents: "auto",
                    width: "100%",
                }}
            >
                <Autocomplete
                    value={value}
                    disableClearable
                    disabled={followGps}
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}
                    onChange={(e, newValue) => {
                        if (!newValue) return;

                        const updateSelection = (finalValue) => {
                            setValue(finalValue);
                            setMarkers(
                                {
                                    coordinates: finalValue.value,
                                    address: finalValue.address,
                                    key: Date.now(),
                                    feature: finalValue.feature,
                                    idx: idx,
                                    sender: "textInput",
                                },
                                idx,
                            );
                            setOpen(false);
                        };

                        if (newValue.isCurrentLocation) {
                            checkGpsPositionWithinBoundary()
                                .then((pos) => {
                                    if (!pos) {
                                        setOpen(false);
                                        return;
                                    }

                                    const coords = {
                                        lat: pos.coords.latitude,
                                        lng: pos.coords.longitude,
                                    };

                                    updateSelection({
                                        ...newValue,
                                        value: coords,
                                        feature: {
                                            ...newValue.feature,
                                            coordinates: coords,
                                        },
                                    });
                                })
                                .catch((err) => {
                                    console.error("Chain failed:", err);
                                    setOpen(false);
                                });
                        } else {
                            updateSelection(newValue);
                        }
                    }}
                    inputValue={inputValue}
                    onInputChange={(e, newInputValue, reason) => {
                        setInputValue(newInputValue);
                        if (reason === "input" || reason === "reset") {
                            setOpen(true);
                        }
                    }}
                    options={options}
                    filterOptions={filterOptions}
                    getOptionLabel={(opt) => opt?.address || ""}
                    open={open}
                    sx={{ width: "100%" }}
                    renderOption={(props, option) =>
                        renderLabelIcons(props, option)
                    }
                    renderInput={(params) =>
                        inputLabelIcons(params, placeholder, value, inputRef)
                    }
                    slotProps={{
                        popper: {
                            container: () => portalRef.current,
                            sx: { mt: 0 },
                        },
                    }}
                />
                <Fade
                    in={open}
                    timeout={150}
                    ref={portalRef}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: "100%",
                            zIndex: -1,
                            boxShadow: `0 2px 6px ${theme.palette.primary.main}55`,
                        }}
                    />
                </Fade>
            </ShadowBox>
        </ShadowBox>
    );
}

function renderLabelIcons(props, option) {
    const { key, ...otherProps } = props;

    return (
        <div key={key}>
            <Box
                component="li"
                {...otherProps}
                sx={{
                    width: "100%",
                    display: "flex !important",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    py: 1,
                }}
            >
                <Typography
                    // variant="body2"
                    sx={{
                        flexGrow: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        marginRight: "8px",
                    }}
                >
                    {option.address}
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                >
                    {option.isCurrentLocation && (
                        <GpsActivateIcon color="primary" />
                    )}
                    {option?.feature?.wheelchair && (
                        <PickAccessibilityIcon
                            accessibility={option.feature.wheelchair}
                        />
                    )}
                </Stack>
            </Box>

            {option.isCurrentLocation && (
                <Divider
                    sx={{ mx: 2, my: 0.5, borderColor: "rgba(0,0,0,0.1)" }}
                />
            )}
        </div>
    );
}

function inputLabelIcons(params, placeholder, value, inputRef) {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            key={"value-" + params.id}
        >
            <TextField
                inputRef={inputRef}
                {...params}
                placeholder={placeholder}
                variant="outlined"
            />
            {value?.feature && value.feature?.wheelchair && (
                <>
                    <IconButton
                        variant={"mini"}
                        sx={{
                            pointerEvents: "none",
                            position: "absolute",
                            right: 0,
                        }}
                    >
                        <PickAccessibilityIcon
                            accessibility={value.feature?.wheelchair}
                        />
                    </IconButton>
                </>
            )}
        </Stack>
    );
}

function PickAccessibilityIcon({ accessibility }) {
    return (
        <>
            {accessibility == "yes" ? (
                <AccessibleIcon />
            ) : accessibility == "no" ? (
                <NotAccessibleIcon />
            ) : accessibility == "limited" ? (
                <WheelchairPickupIcon />
            ) : (
                <></>
            )}
        </>
    );
}
