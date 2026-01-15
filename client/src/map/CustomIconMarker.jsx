import { Marker } from "react-leaflet";
import * as L from "leaflet";
import { renderToString } from "react-dom/server";

import CustomIcon from "@/ui/CustomIcon";

export default function CustomIconMarker({
    position,
    type,
    color,
    i,
    size = "normal",
}) {
    const element = renderToString(
        <div
            style={{
                width: size === "big" ? 48 : 36,
                height: size === "big" ? 48 : 36,
                borderRadius: "50%",
                background: "white",
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
            icon={icon}
            position={position}
        />
    );
}
