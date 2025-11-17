// Route.jsx
import { useEffect, useState } from "react";
import { LayerGroup, GeoJSON, useMap, Pane } from "react-leaflet";

import Alerts from "@/map/Alerts.jsx";
import * as L from "leaflet";

import { useStore } from "@/store/useStore.jsx";

export default function Route({ mainColor }) {
    const map = useMap();
    const [baseLine, setBaseLine] = useState(null);
    const routeData = useStore((s) => s.route);

    useEffect(() => {
        if (!routeData || !routeData.features) {
            setBaseLine(null);
            return;
        }
        const baselineFeature =
            routeData.features.find(
                (f) => f?.properties?.profile === "baseline"
            ) || null;

        setBaseLine(baselineFeature.segments);
    }, [routeData]);

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
            <Pane
                name="alerts"
                style={{ zIndex: 650 }}
            >
                <Alerts
                    data={baseLine}
                    mainColor={mainColor}
                />
            </Pane>
        </LayerGroup>
    );
}
