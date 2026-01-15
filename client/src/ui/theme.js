import { createTheme } from "@mui/material/styles";
import { alpha, darken, lighten } from "@mui/material/styles";
import { profiles, profileList } from "@/lib/profiles.config";

// const isMobile =
//     /Mobi|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) ||
//     (typeof window !== "undefined" &&
//         window.matchMedia &&
//         window.matchMedia("(pointer: coarse)").matches);

const isMobile =
    typeof window !== "undefined" &&
    // 1. Check for "Mobi" which covers most phone browsers (including Android)
    // 2. Explicitly include iPhone and iPod
    // 3. Explicitly exclude iPad (just in case)
    /Mobi|iPhone|iPod|Windows Phone/i.test(navigator.userAgent) &&
    !/iPad/i.test(navigator.userAgent);

// Adjust viewport if running as standalone PWA
const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

const mainContainerPadding = 16;

const gridSpacing = 8;
const gridRes = isMobile
    ? { w: 6, h: isStandalone ? 13 : 12 }
    : { w: 20, h: 13 };

// const gridU = {
//     h: (window.innerHeight - mainContainerPadding * 2R) / gridRes.h,
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
    doubleSpacing: `${gridSpacing * 2}px`,
    resolution: gridRes,
    units: gridU,
};

const iconH = `${gridU.h - gridSpacing}px`;
const brdRad = `${(gridU.h - gridSpacing) / 2}px`;
const offRad = `${(gridU.h - gridSpacing) / 4}px`;

export default function getTheme(profile) {
    const main = profile?.color || "#1a1a1a";
    const secondary = "#ffffff";

    // const rndX = ((Math.random() - 0.5) * 2) % 1;
    // const rndY = ((Math.random() - 0.5) * 2) % 1;
    const rndX = 1;
    const rndY = 1;

    return createTheme({
        isMobile,
        mainContainerPadding: `${mainContainerPadding}px`,
        iconH,
        grid,
        brdRad,
        offRad,
        palette: {
            primary: {
                main,
                contrastText: main,
                darker: darken(main, 0.2),
                brighter: lighten(main, 0.2),
            },
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
            transition: "box-shadow 0.5s ease-in-out",
        },
        typography: {
            fontFamily: "Work Sans",
        },

        components: {
            MuiBadge: {
                styleOverrides: {
                    badge: {
                        borderRadius: brdRad,
                        color: main,
                        border: `2px solid ${main}`,
                        backgroundColor: secondary,
                        textTransform: "uppercase",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        pointerEvents: "auto",
                        border: `2px solid ${main}`,
                        borderRadius: brdRad,
                        boxShadow: `0 2px 6px ${main}55`,
                        color: secondary,
                        textTransform: "capitalize",
                        backgroundColor: main,

                        "&:focus": {
                            backgroundColor: darken(main, 0.15),
                        },
                        "&:hover": {
                            backgroundColor: darken(main, 0.15),
                        },
                    },
                },
                variants: [
                    {
                        props: { variant: "mini" },
                        style: {
                            // border: `4px solid ${main}`,
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
                            // border: `2px solid ${main}`,
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
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        pointerEvents: "auto",
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
                            // color: main,
                            // backgroundColor: secondary,
                            // border: `2px solid ${main}`,
                            color: secondary,
                            backgroundColor: lighten(main, 0.85),
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
                            // border: `4px solid ${main}`,
                            transform: "scale(0.75)",
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
                        props: { variant: "inactive" },
                        style: {
                            color: main,
                            backgroundColor: secondary,
                            border: `2px solid ${main}`,
                            pointerEvents: "none",
                            pointer: "default",
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
                    {
                        props: { variant: "inverted-mini" },
                        style: {
                            transform: "scale(0.75)",
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
            MuiInput: {
                styleOverrides: {
                    root: {
                        "&:before": {
                            borderBottomColor: main, // default
                        },

                        "&:after": {
                            borderBottomColor: main, // focused
                        },
                    },
                },
            },

            MuiAutocomplete: {
                styleOverrides: {
                    root: { pointerEvents: "auto" },
                    inputRoot: {
                        "& .MuiOutlinedInput-root": {
                            paddingY: 0,
                            // paddingX: 0.5,
                            height: "100%",
                            color: main,
                        },
                        "& .MuiInputBase-input": {
                            padding: 0,
                            fontSize: "0.9rem",
                        },

                        // Capitalize options in dropdown
                        "& .MuiAutocomplete-popper li": {
                            textTransform: "capitalize",
                        },
                        "& .MuiInputBase-input": {
                            textTransform: "capitalize",
                        },
                        // Capitalize the selected value displayed
                        "& .MuiAutocomplete-input": {
                            textTransform: "capitalize",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "& .MuiAutocomplete-endAdornment": {
                            display: "none",
                        },
                    },

                    popper: {
                        marginTop: brdRad,
                        zIndex: 0,
                    },

                    paper: {
                        marginTop: `-${(gridU.h - gridSpacing) / 2}px`,
                        paddingTop: `${(gridU.h - gridSpacing) / 2}px`,
                        zIndex: 0,
                        // borderRadius: brdRad,
                        borderRadius: `${0} ${0} ${brdRad} ${brdRad}`,
                        outline: `2px solid ${main}`,
                        backgroundColor: lighten(main, 0.95),
                        color: main,
                        maxHeight: `200px`,
                        // maxHeight: `-${(gridU.h - gridSpacing) / 2}px`,
                    },

                    listbox: {
                        padding: grid.spacing,
                    },

                    // Capitalize the items in the dropdown list
                    option: {
                        textTransform: "capitalize",
                    },
                },
            },

            // Optional: TextField labels/placeholders also capitalized
            MuiTextField: {
                styleOverrides: {
                    root: {
                        "& .MuiInputBase-input::placeholder": {
                            textTransform: "capitalize",
                        },
                    },
                },
            },
        },
    });
}
