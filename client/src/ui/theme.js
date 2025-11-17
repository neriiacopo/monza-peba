import { createTheme } from "@mui/material/styles";
import { alpha, darken, lighten } from "@mui/material/styles";
import { profiles } from "@/lib/profiles.config";

const mobile = true; // to be properly set ---------

// Adjust viewport if running as standalone PWA
const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

const mainContainerPadding = 16;

const gridSpacing = 8;
const gridRes = mobile ? { w: 6, h: isStandalone ? 13 : 12 } : { w: 20, h: 13 };

// const gridU = {
//     h: (window.innerHeight - mainContainerPadding * 2) / gridRes.h,
//     w: (window.innerWidth - mainContainerPadding * 2) / gridRes.w,
// };

const gridU = {
    h:
        (window.innerHeight -
            mainContainerPadding * 2 -
            (gridSpacing * gridRes.h - 1)) /
        gridRes.h,
    w:
        (window.innerWidth -
            mainContainerPadding * 2 -
            (gridSpacing * gridRes.w - 1)) /
        gridRes.w,
};

const grid = {
    spacing: `${gridSpacing}px`,
    resolution: gridRes,
    units: gridU,
};

const iconH = `${gridU.h - gridSpacing}px`;
const brdRad = `${(gridU.h - gridSpacing) / 2}px`;
const offRad = `${(gridU.h - gridSpacing) / 4}px`;

export default function getTheme(main = "#202124") {
    // const main = colors[profile] || "#1a1a1a";
    const secondary = "#ffffff";

    // const rndX = ((Math.random() - 0.5) * 2) % 1;
    // const rndY = ((Math.random() - 0.5) * 2) % 1;
    const rndX = 1;
    const rndY = 1;

    return createTheme({
        mainContainerPadding: `${mainContainerPadding}px`,
        iconH,
        grid,
        brdRad,
        offRad,
        palette: {
            primary: { main, contrastText: main },
            secondary: { main: secondary, contrastText: secondary },
            text: {
                primary: main,
                secondary: `${main}aa`,
            },
            background: {
                main: "#f5f5f5",
            },
        },

        noBlurShadows: {
            active: `${(rndX * gridSpacing) / 2}px ${
                (rndY * gridSpacing) / 2
            }px 0 ${main}`,
            // active: `0px 0px 12px ${main}55`,
            none: `0 0 0 ${main}`,
            transition: "box-shadow 0.2s ease-in-out",
        },
        typography: {
            fontFamily: "Work Sans",
        },

        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        border: `2px solid ${main}`,
                        boxShadow: `0 2px 6px ${main}55`,
                        color: main,
                        "&:focus": {
                            backgroundColor: darken(main, 0.15),
                        },
                        "&:hover": {
                            backgroundColor: darken(main, 0.15),
                        },
                    },
                },
            },

            MuiChip: {
                styleOverrides: {
                    root: {
                        borderRadius: brdRad,
                        color: main,
                        border: `2px solid ${main}`,
                        backgroundColor: secondary,
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        width: iconH,
                        height: iconH,
                        borderRadius: brdRad,
                        // background:
                        //     "radial-gradient(circle at 50% 50%,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.1) 40%,rgba(0, 0, 0, 0) 80%)",

                        backgroundColor: main,
                        "&:focus": {
                            backgroundColor: darken(main, 0.15),
                        },
                        "&:hover": {
                            backgroundColor: darken(main, 0.15),
                        },
                        "&.Mui-disabled": {
                            color: main,
                            backgroundColor: secondary,
                            border: `2px solid ${main}`,
                        },
                        "& .MuiSvgIcon-root": {
                            width: "80%",
                            height: "80%",
                            color: secondary,
                        },
                    },
                },
                variants: [
                    {
                        props: { variant: "mini" },
                        style: {
                            border: `4px solid ${main}`,
                            transform: "scale(0.5)",
                            color: secondary,
                            // backgroundColor: secondary,
                            // "&:hover": {
                            //     backgroundColor: darken(secondary, 0.1),
                            // },
                            "& .MuiSvgIcon-root": {
                                color: secondary,
                            },
                        },
                    },
                    {
                        props: { variant: "inverted" },
                        style: {
                            color: main,
                            backgroundColor: secondary,
                            border: `2px solid ${main}`,
                            "&:hover": {
                                backgroundColor: darken(secondary, 0.1),
                            },
                            "& .MuiSvgIcon-root": {
                                color: main,
                            },
                        },
                    },
                ],
            },
        },
    });
}
