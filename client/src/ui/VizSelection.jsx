import { Stack, IconButton, Chip } from "@mui/material";
import { useState } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function VizSelection({
    theme,
    options,
    showLabel = true,
    variant = "mini",
    prev = null,
    next = null,
}) {
    const [selection, setSelection] = useState(options[0]);

    function changeSelection(direction) {
        const currentIdx = options.indexOf(selection);
        const nextIdx =
            (currentIdx + direction + options.length) % options.length;
        setSelection(options[nextIdx]);
    }

    const btns = {
        left: {
            label: "◀",
            icon: ArrowBackIosNewIcon,
            fn: () => {
                changeSelection(-1);
                if (prev) prev();
            },
        },
        right: {
            label: "▶",
            icon: ArrowForwardIosIcon,
            fn: () => {
                changeSelection(+1);
                if (next) next();
            },
        },
    };

    return (
        <Stack
            sx={{
                position: "absolute",
                top: 0,
                width: "100%",
                zIndex: 10,
                height: `${theme.grid.units.h - 2}px`,
                color: theme.palette.primary.main,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                pointerEvents: "none",
            }}
        >
            <IconButton
                variant={variant}
                sx={{
                    pointerEvents: "auto",
                }}
                onClick={btns.left.fn}
            >
                {/* {btns.left.label} */}
                <btns.left.icon />
            </IconButton>
            {showLabel && <Chip label={selection} />}
            <IconButton
                variant={variant}
                onClick={btns.right.fn}
                sx={{
                    pointerEvents: "auto",
                }}
            >
                {/* {btns.right.label} */}
                <btns.right.icon />
            </IconButton>
        </Stack>
    );
}
