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
    Collapse,
} from "@mui/material";
import ShadowBox from "./ShadowBox.jsx";
import { useStore } from "@/store/useStore.jsx";
import { formatAddress } from "@/lib/data.utils.js";

import { zoomToAll } from "@/lib/map.utils.js";

import AccessibleIcon from "@mui/icons-material/Accessible";
import NotAccessibleIcon from "@mui/icons-material/NotAccessible";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";

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
    const map = useStore((s) => s.map);
    const portalRef = useRef(null);

    const handleHideKeyboard = () => {
        inputRef.current.blur();
    };

    const options = useMemo(
        () =>
            addresses.map((feature, idx) => ({
                address: formatAddress(feature),
                value: feature.coordinates,
                feature: feature,
            })),
        [addresses]
    );

    useEffect(() => {
        if (markers.length === 0) {
            setValue(null);
            setInputValue("");
        } else {
            if (!markers[idx]) return;
            setInputValue(markers[idx]?.address);
            setValue({
                address: markers[idx]?.address,
                value: markers[idx]?.coordinates,
                feature: markers[idx]?.feature,
            });
        }
    }, [markers]);

    const filterOptions = createFilterOptions({
        limit: 10,
        ignoreCase: true,
        trim: true,
    });

    useEffect(() => {
        if (!open) {
            handleHideKeyboard();
        }
    }, [open]);

    return (
        <ShadowBox
            outlined={false}
            sx={{
                height: `${theme.grid.units.h}px`,
                // marginY: theme.grid.spacing,
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
                // focus
                sx={{
                    maxHeight: `calc(${theme.grid.units.h}px - ${theme.grid.spacing})`,
                    marginLeft: theme.grid.spacing,
                    // borderRadius: theme.brdRad,
                    borderRadius: 9999,
                    display: "flex",
                    alignItems: "center",
                    pointerEvents: "auto",
                }}
            >
                <Autocomplete
                    value={value}
                    disableClearable
                    onChange={(e, newValue) => {
                        setValue(newValue);
                        setMarkers(
                            {
                                coordinates: newValue.value,
                                address: newValue.address,
                                key: Date.now(),
                                feature: newValue.feature,
                                idx: idx,
                                sender: "textInput",
                            },
                            idx
                        );

                        setOpen(false);
                        // zoomToAll(map);
                        // if (inputRef.current) {
                        //     inputRef.current.blur();
                        // }
                    }}
                    inputValue={inputValue}
                    onInputChange={(e, newInputValue) => {
                        setInputValue(newInputValue);
                        setOpen(newInputValue.length > 0);
                    }}
                    options={options}
                    filterOptions={filterOptions}
                    getOptionLabel={(opt) => opt?.address || ""}
                    open={open}
                    sx={{
                        width: "100%",
                    }}
                    renderInput={(params) =>
                        labelAccessibility(params, placeholder, value, inputRef)
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
                    ></Box>
                </Fade>
            </ShadowBox>
        </ShadowBox>
    );
}

function labelAccessibility(params, placeholder, value, inputRef) {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1}
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
                        {value.feature?.wheelchair == "yes" ? (
                            <AccessibleIcon />
                        ) : value.feature?.wheelchair == "no" ? (
                            <NotAccessibleIcon />
                        ) : value.feature?.wheelchair == "limited" ? (
                            <WheelchairPickupIcon />
                        ) : (
                            <></>
                        )}
                    </IconButton>
                </>
            )}
        </Stack>
    );
}
