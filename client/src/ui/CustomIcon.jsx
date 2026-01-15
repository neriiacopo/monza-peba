import { SvgIcon } from "@mui/material";

import { useIcon } from "@/assets/useIcon";

export default function CustomIcon({
    type,
    color = "currentColor",
    size = 24,
    stroke = 2,
    ...props
}) {
    return (
        <SvgIcon
            component={useIcon(type)}
            inheritViewBox
            sx={{
                width: size,
                height: size,
                color,
                "& path, & polygon": {
                    stroke: color,
                    strokeWidth: stroke,
                    fill: color,
                },
                ...props.sx,
            }}
            {...props}
        />
    );
}
