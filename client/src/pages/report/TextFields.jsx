import { Stack, TextField } from "@mui/material";
import { useState, useEffect } from "react";

export default function TextFields({
    addData = () => {},
    inputData,
    accent = "black",
    ...props
}) {
    const [values, setValues] = useState(inputData ?? props.default);

    function updateValue(op, subkey) {
        setValues({ ...values, [subkey]: op });
        addData?.(props.id, { ...values, [subkey]: op });
    }

    return (
        <Stack
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
            }}
        >
            <TextField
                fullWidth
                variant="standard"
                placeholder="Email"
                sx={{ mb: 1 }}
                value={values.email ?? ""}
                onChange={(e) => updateValue(e.target.value, "email")}
            />
            <TextField
                fullWidth
                variant="standard"
                placeholder="Nome"
                sx={{ mb: 1 }}
                value={values.firstName ?? ""}
                onChange={(e) => updateValue(e.target.value, "firstName")}
            />
            <TextField
                fullWidth
                variant="standard"
                placeholder="Cognome"
                sx={{ mb: 1 }}
                value={values.lastName ?? ""}
                onChange={(e) => updateValue(e.target.value, "lastName")}
            />
        </Stack>
    );
}
