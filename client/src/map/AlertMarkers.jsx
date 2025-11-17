import { SvgIcon, IconButton } from "@mui/material";
import { Marker } from "react-leaflet";
import * as L from "leaflet";
import { renderToString } from "react-dom/server";
// import { IconSteps, IconStairs, IconWidth } from "@/assets/icons";

import IconSteps from "@/assets/svg/icon_steps.svg?react";
import IconStairs from "@/assets/svg/icon_stairs.svg?react";
import IconWidth from "@/assets/svg/icon_width.svg?react";

const ICONS = {
    steps: IconSteps,
    stairs: IconStairs,
    widths: IconWidth,
};

export default function AlertMarkers({ items, type, color }) {
    return items.map((item) => {
        const element = renderToString(
            <div
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 6,
                    boxSizing: "border-box",
                    border: `2px solid ${color}`,
                }}
            >
                <SvgIcon
                    component={ICONS[type]}
                    inheritViewBox
                    sx={{
                        width: "100%",
                        height: "100%",
                        color: color,
                        "& path": {
                            strokeWidth: 2,
                        },
                    }}
                />
            </div>
        );

        const icon = L.divIcon({
            html: element,
            className: "alert-icon",
            iconSize: [36, 36],
            iconAnchor: [18, 18],
            zIndex: 1000,
        });

        return (
            <Marker
                key={item.gid}
                icon={icon}
                position={[
                    item.geom.coordinates[0][1],
                    item.geom.coordinates[0][0],
                ]}
            />
        );
    });
}
