import { SvgIcon } from "@mui/material";

import IconStepsRaw from "@/assets/svg/icon_steps.svg";
import IconWidthRaw from "@/assets/svg/icon_width.svg";
import IconStairsRaw from "@/assets/svg/icon_stairs.svg";

function makeIcon(IconRaw) {
    return function WrappedIcon(props) {
        return (
            <SvgIcon
                component={IconRaw}
                inheritViewBox
                sx={{
                    stroke: "currentColor",
                    strokeWidth: props.thickness ?? 2,
                    fill: "currentColor",
                    ...props.sx,
                }}
                {...props}
            />
        );
    };
}

export const IconSteps = makeIcon(IconStepsRaw);
export const IconWidth = makeIcon(IconWidthRaw);
export const IconStairs = makeIcon(IconStairsRaw);
