import { createTheme } from "@mui/material/styles";
import { alpha, darken, lighten } from "@mui/material/styles";

const mobile = true; // to be properly set ---------

// Adjust viewport if running as standalone PWA
const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

const mainContainerPadding = 15;

const gridSpacing = 7;
const gridRes = mobile ? { w: 6, h: isStandalone ? 13 : 12 } : { w: 20, h: 13 };
const gridU = {
    h: (window.innerHeight - mainContainerPadding * 2) / gridRes.h,
    w: (window.innerWidth - mainContainerPadding * 2) / gridRes.w,
};
const grid = {
    spacing: `${gridSpacing}px`,
    resolution: gridRes,
    units: gridU,
};

const iconH = `${gridU.h - gridSpacing}px`;
const brdRad = `${(gridU.h - gridSpacing) / 2}px`;
const offRad = `${(gridU.h - gridSpacing) / 4}px`;

const colors = {
    pedone: "#FF4D4E",
    wheelchair: "#4FC3F7",
    normo: "#fad02c",
    visuallyImpaired: "#F06292",
    elderly: "#66BB6A",
    parent: "#f59e0b",
};

export default function getTheme(profile = "pedone") {
    const main = colors[profile] || "#000000";
    const secondary = "#f5f5f5";

    return createTheme({
        mainContainerPadding: `${mainContainerPadding}px`,
        iconH,
        grid,
        brdRad,
        offRad,
        palette: {
            primary: { main, contrastText: main, secondary: secondary },
            text: {
                primary: main, // 👈 all text defaults to this
                secondary: `${main}aa`, // optional, slightly transparent
            },
            background: {
                main: "#f5f5f5",
            },
        },

        noBlurShadows: {
            active: `${gridSpacing / 2}px ${gridSpacing / 2}px 0 ${main}`,
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
                        "&:hover": {
                            backgroundColor: `${main}10`,
                        },
                    },
                },
            },

            MuiIconButton: {
                styleOverrides: {
                    root: {
                        backgroundColor: main,
                        width: iconH,
                        height: iconH,
                        borderRadius: brdRad,
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
                    },
                },
            },
            // MuiCssBaseline: {
            //     styleOverrides: {
            //         body: {
            //             color: main, // 👈 affects all raw text, not just MUI Typography
            //         },
            //     },
            // },
        },
    });
}

// // Main dims and colors
// let theme = createTheme({
//     fontFamily: "Work Sans",
//     mainContainerPadding: `${mainContainerPadding}px`,
//     btnH,
//     btnM,
//     brdRad: `${btnH / 2}px`,
//     typography: {
//         fontFamily: "Work Sans",
//     },
//     palette: {
//         primary: {
//             main: "#1e88e5",
//         },
//         secondary: {
//             main: "#e91e63",
//         },
//         success: {
//             main: "#4caf50",
//         },
//         warning: {
//             main: "#ff9800",
//         },
//         error: {
//             main: "#f44336",
//         },
//         background: {
//             main: "#f5f5f5",
//         },
//         // text: {
//         //     main: "#212121",
//         // },
//         white: {
//             light: "#ffffff",
//             main: "#f5f5f5",
//             darker: "#ebebeb",
//         },
//         black: {
//             light: "#000000",
//             main: "#212121",
//             darker: "#000000",
//         },
//         grey: {
//             light: "#f5f5f5",
//             main: "#bdbdbd",
//             darker: "#757575",
//         },
//         extra: {
//             inspect: "#F8AC4F",
//             interpret: "#5EBDFF",
//             analyze: "#E943A4",
//         },
//     },
// });

// // Components
// theme = createTheme(theme, {
//     bnrH: btnH + btnM * 2,
//     viewportS: {
//         width: `${
//             window.innerWidth - btnH - mainContainerPadding - btnM * 6
//         }px`,
//         height: `${
//             window.innerHeight -
//             2 * (btnH + btnM * 2) -
//             mainContainerPadding * 2
//         }px`,
//         ml: `${btnM}px`,
//     },
//     btnS: {
//         width: `${theme.btnH}px`,
//         height: `${theme.btnH}px`,
//         borderRadius: theme.brdRad,
//         backgroundColor: theme.palette.white.main,
//         border: `solid 1px ${theme.palette.white.darker}`,
//         margin: `${theme.btnM}px`,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     btnTxtS: {
//         width: `auto`,
//         paddingLeft: `${theme.btnM * 2}px`,
//         paddingRight: `${theme.btnM * 2}px`,
//     },
//     tooltipS: {
//         fontSize: "0.8rem",
//         p: 2,
//         borderRadius: theme.brdRad,
//         color: theme.palette.white.main,
//     },
//     chartS: {
//         backgroundColor: "transparent",
//         tickFontSize: 30,
//         tickFill: theme.palette.white.main,
//         margin: {
//             top: 100,
//             right: 100,
//             bottom: 100,
//             left: 100,
//         },
//         axis: {
//             stroke: theme.palette.grey.darker,
//             strokeWidth: 2,
//         },
//         axisTickLabelProps: {
//             // fill: theme.palette.white.main,
//             stroke: theme.palette.grey.darker,
//             strokeWidth: 1,
//             fontSize: 15,
//             fontFamily: theme.fontFamily,
//             textAnchor: "middle",
//         },
//         gridLineStyle: {
//             stroke: theme.palette.grey.darker,
//             strokeWidth: 1,
//             strokeDasharray: "2,5",
//         },
//         line: {
//             stroke: theme.palette.white.main,
//             strokeWidth: 5,
//         },
//     },
// });

// export default theme;
