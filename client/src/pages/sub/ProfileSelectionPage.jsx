import { Box, Chip, Typography } from "@mui/material";

import { useStore } from "@/store/useStore.jsx";

import ProfilesCarousel from "@/ui/profiles/ProfilesCarousel.jsx";
import ShadowBox from "@/ui/ShadowBox.jsx";
import Spacer from "@/ui/Spacer.jsx";
import GridHelper from "@/ui/GridHelper.jsx";
import MainButton from "@/ui/MainButton";

export default function ProfileSelectionPage({ theme }) {
    const profile = useStore((s) => s.selectedProfile);

    const hs = [1, 1, "X", 3, 1, 1];

    return (
        <>
            {/* Title */}
            <Spacer
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ShadowBox
                    focus={true}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "75%",
                        height: `${theme.grid.units.h}px`,
                    }}
                >
                    <Typography as="h1">Pedone</Typography>
                </ShadowBox>
            </Spacer>

            {/* <ProfilesCarousel /> */}
            <Box
                sx={{
                    flexGrow: 1,
                    marginY: theme.grid.spacing,
                }}
            >
                <ProfilesCarousel />
            </Box>

            {/* Stats parameters */}
            <ShadowBox
                focus={true}
                sx={{
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    marginY: theme.grid.spacing,
                    height: `${theme.grid.units.h * 3}px`,
                }}
            ></ShadowBox>

            {/* Confirm button */}
            {/* <ShadowBox
                sx={{
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    marginY: theme.grid.spacing,
                    height: `${theme.grid.units.h * 1}px`,
                }}
            ></ShadowBox> */}
            <Spacer
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <MainButton
                    label={"Conferma"}
                    onClick={() => useStore.setState({ page: "map" })}
                />
            </Spacer>
            {/* <Spacer /> */}

            {/* <GridHelper hs={hs} /> */}
        </>
    );
}
