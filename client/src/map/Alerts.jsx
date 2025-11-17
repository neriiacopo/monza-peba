import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";
import { SvgIcon } from "@mui/material";

import AlertMarkers from "@/map/AlertMarkers.jsx";

export default function Alerts({ data, mainColor }) {
    const profile = useStore((s) => s.selectedProfile);

    // Hooks must run ALWAYS
    const [steps, setSteps] = useState([]);
    const [widths, setWidths] = useState([]);
    const [stairs, setStairs] = useState([]);
    const [crashes, setCrashes] = useState([]);

    useEffect(() => {
        if (data && profile && profile !== "") {
            const newSteps =
                data.filter((item) => item?.metadata?.steps === "STEPS") || [];

            const newWidths =
                data.filter(
                    (item) =>
                        item?.metadata?.width_min < profile?.params?.width_min
                ) || [];

            const newStairs =
                data.filter(
                    (item) => item?.metadata?.steps === "STEP_STAIRS"
                ) || [];

            if (steps !== newSteps) setSteps(newSteps);
            if (widths !== newWidths) setWidths(newWidths);
            if (stairs !== newStairs) setStairs(newStairs);
        }
    }, [data, profile]);

    if (!data || data.length === 0 || !profile || profile === "") return null;

    return (
        <>
            <AlertMarkers
                items={steps}
                type="steps"
                color={mainColor}
            />
            <AlertMarkers
                items={stairs}
                type="stairs"
                color={mainColor}
            />
            <AlertMarkers
                items={widths}
                type="widths"
                color={mainColor}
            />
        </>
    );
}
