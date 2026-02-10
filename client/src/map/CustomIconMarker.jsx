import { Marker } from "react-leaflet";
import * as L from "leaflet";
import { renderToString } from "react-dom/server";

import { lighten } from "@mui/material";
import CustomIcon from "@/ui/CustomIcon";

export default function CustomIconMarker({
    position,
    type,
    color,
    i,
    size = "normal",
    accessible = false,
    id = null,
    children,
    onClick = null,
}) {
    const element = renderToString(
        <div
            style={{
                width: size === "big" ? 48 : 36,
                height: size === "big" ? 48 : 36,
                borderRadius: "50%",
                background: accessible ? lighten(color, 0.66) : "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: size === "big" ? 0 : 6,

                boxSizing: "border-box",
                border: `2px solid ${color}`,
            }}
        >
            <CustomIcon
                type={type}
                color={color}
                size={24}
            />
        </div>,
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
            icon={icon}
            position={position}
            id={id}
            eventHandlers={{
                click: (e) => {
                    e.originalEvent?.stopPropagation();
                    if (onClick) onClick(e);
                },
            }}
        >
            {children}
        </Marker>
    );
}
