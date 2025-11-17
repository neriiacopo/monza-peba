import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

import ShadowBox from "./ShadowBox";

export default function GridHelper({
    hs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
}) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100dvh",
                display: "flex",
                flexDirection: "column",
                p: theme.mainContainerPadding,
                zIndex: 0,
            }}
        >
            {hs.map((h, idx) => {
                if (h === "X") {
                    return (
                        <ShadowBox
                            key={idx}
                            sx={{
                                overflow: "hidden",
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginY: theme.grid.spacing,
                                borderColor: "lightgrey",
                            }}
                        ></ShadowBox>
                    );
                } else {
                    return (
                        <ShadowBox
                            key={idx}
                            sx={{
                                overflow: "hidden",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",

                                marginY: theme.grid.spacing,
                                height: `${theme.grid.units.h * h}px`,
                                borderColor: "lightgrey",
                            }}
                        ></ShadowBox>
                    );
                }
            })}
        </Box>
    );
}
