// Route.jsx
import { useEffect } from "react";
import { LayerGroup, GeoJSON, useMap } from "react-leaflet";
import * as L from "leaflet";

export default function Route({ routeData, mainColor }) {
    const map = useMap();

    useEffect(() => {
        if (!map || !routeData) return;
        if (!routeData.features || routeData.features.length === 0) return;

        const tempLayer = L.geoJSON(routeData);
        const bounds = tempLayer.getBounds();
        tempLayer.remove();

        if (bounds.isValid()) {
            map.fitBounds(bounds.pad(0.15), { animate: true });
        }
    }, [map, routeData]);

    if (!routeData || !routeData.features) return null;

    return (
        <LayerGroup>
            {routeData.features.map((f, index) => (
                <GeoJSON
                    key={index}
                    data={f}
                    style={{
                        color: mainColor,
                        weight: 5,
                        dashArray:
                            f.properties.profile === "baseline" ? "5,15" : null,
                        lineCap: "round",
                        lineJoin: "round",
                    }}
                />
            ))}
        </LayerGroup>
    );
}
