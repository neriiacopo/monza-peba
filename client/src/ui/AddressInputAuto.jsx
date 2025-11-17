import { useState, useMemo, useRef, useEffect } from "react";
import {
    Autocomplete,
    TextField,
    IconButton,
    Typography,
    createFilterOptions,
} from "@mui/material";
import ShadowBox from "./ShadowBox.jsx";
import { useStore } from "@/store/useStore.jsx";

export default function AddressInputAuto({
    theme,
    label = "Da",
    placeholder = "Seleziona una Destinazione",
}) {
    const inputRef = useRef(null);
    const { addresses, setMarkers } = useStore();
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [open, setOpen] = useState(false);

    const handleHideKeyboard = () => {
        inputRef.current.blur();
    };

    const options = useMemo(
        () =>
            addresses.map((feature, idx) => ({
                label: `${feature.properties["nome strada"]}, ${feature.properties.numero}`,
                value: feature.geometry.coordinates,
            })),
        [addresses]
    );

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
                marginY: theme.grid.spacing,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <IconButton disabled>
                <Typography>{label}</Typography>
            </IconButton>

            <ShadowBox
                // focus
                sx={{
                    height: `${theme.grid.units.h}px`,
                    marginLeft: theme.grid.spacing,
                    borderRadius: theme.brdRad,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: theme.offRad,
                }}
            >
                <Autocomplete
                    value={value}
                    disableClearable
                    onChange={(e, newValue) => {
                        setValue(newValue);
                        setMarkers({
                            coordinates: newValue.value.reverse(),
                            key: Date.now(),
                        });

                        setOpen(false);
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
                    getOptionLabel={(opt) => opt?.label || ""}
                    open={open}
                    sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                            paddingY: 0,
                            paddingX: 0.5,
                            height: "100%",
                            color: theme.palette.primary.main,
                        },
                        "& .MuiInputBase-input": {
                            padding: 0,
                            fontSize: "0.9rem",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "& .MuiAutocomplete-endAdornment": {
                            display: "none",
                        },
                    }}
                    renderInput={(params) => (
                        <TextField
                            inputRef={inputRef}
                            {...params}
                            placeholder={placeholder}
                            variant="outlined"
                        />
                    )}
                />
            </ShadowBox>
        </ShadowBox>
    );
}
