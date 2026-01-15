import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { useTheme } from "@mui/material";

import ShadowBox from "@/ui/ShadowBox.jsx";

export default function TextAreaField({ addData, ...props }) {
    const theme = useTheme();
    const [text, setText] = useState("");

    function updateValue(op) {
        setText(op);
        addData?.(props.id, op);
    }

    return (
        <ShadowBox
            focus={false}
            outlined={false}
            light={true}
            sx={{
                width: "100%",
                height: "300px",
                minHeight: "150px",
                overflow: "scroll",
                mb: 1.5,
                p: 2,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    height: "100%",
                    overflowY: "auto",
                }}
            >
                <TextField
                    multiline
                    // minRows={3}
                    placeholder="Aggiungi un commento..."
                    value={text}
                    onChange={(e) => updateValue(e.target.value)}
                    variant="standard"
                    fullWidth
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        px: theme.grid.spacing,
                        "& .MuiInputBase-root:before": {
                            borderBottom: "none",
                        },
                        "& .MuiInputBase-root:after": {
                            borderBottom: "none",
                        },
                        "& textarea": { padding: 0 },
                        background: "transparent",
                    }}
                />
            </Box>
        </ShadowBox>
    );
}
