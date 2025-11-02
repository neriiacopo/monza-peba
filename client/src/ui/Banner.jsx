import { Fragment } from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import LogoIcon from "@mui/icons-material/Foundation";
import HelpIcon from "@mui/icons-material/QuestionMark";
import ProfileIcon from "@mui/icons-material/SettingsAccessibility";

export default function Banner() {
    const theme = useTheme();

    const btns = [
        { icon: LogoIcon, action: () => console.log("Logo clicked") },
        { icon: HelpIcon, action: () => console.log("Help clicked") },
        { icon: ProfileIcon, action: () => console.log("Profile clicked") },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                height: `${theme.grid.units.h}px`,
                marginY: theme.grid.spacing,
                borderRadius: theme.brdRad,
                // border: `solid 2px ${theme.palette.primary.main}`,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            {btns.map((btn, index) => (
                <Fragment key={index}>
                    <IconButton
                        onClick={btn.action}
                        sx={{
                            width: `${theme.iconH}`,
                            height: `${theme.iconH}`,
                            marginLeft: index === 0 ? 0 : theme.grid.spacing,
                        }}
                    >
                        <btn.icon
                            sx={{
                                width: "60%",
                                height: "60%",
                                color: theme.palette.primary.secondary,
                            }}
                        />
                    </IconButton>
                    {index == 0 ? <Box sx={{ flexGrow: 1 }}></Box> : null}
                </Fragment>
            ))}
        </Box>
    );
}
