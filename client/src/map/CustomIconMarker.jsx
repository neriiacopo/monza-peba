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
    heading = null,
}) {
    const iconSize = size === "big" ? 48 : 36;
    const element = renderToString(
        <div
            style={{
                width: iconSize,
                height: iconSize,
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
            {heading && (
                <div
                    style={{
                        position: "absolute",

                        top: -4,
                        left: -4,
                        right: -4,
                        bottom: -4,
                        borderRadius: "50%",
                        background: `conic-gradient(from ${heading - 45}deg, ${color} 0deg, ${color} 90deg, transparent 90deg)`,
                        zIndex: -1,
                        transition: "transform 0.2s ease-out",
                    }}
                ></div>
            )}
        </div>,
    );

    const icon = L.divIcon({
        html: element,
        className: "alert-icon",
        iconSize: size === "big" ? [48, 48] : [36, 36],
        iconAnchor: size === "big" ? [24, 24] : [18, 18],
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
