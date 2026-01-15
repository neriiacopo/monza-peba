// Route.jsx
import { useEffect, useState } from "react";
import { LayerGroup, GeoJSON, useMap, Pane, Polyline } from "react-leaflet";

import Alerts from "@/map/Alerts.jsx";
import * as L from "leaflet";

import { useStore } from "@/store/useStore.jsx";

export default function Route({ mainColor }) {
    const map = useMap();
    const markers = useStore((s) => s.markers);
    const routeData = useStore((s) => s.route);
    const [baseLine, setBaseLine] = useState(null);
    const [connections, setConnections] = useState([]);

    useEffect(() => {
        console.log("makrs", markers);
    }, [markers]);

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

    if (!routeData || !routeData.features) return null;

    return (
        <LayerGroup>
            {routeData.features.map((f, index) => {
                console.log("route feature", f);
                return (
                    <LayerGroup key={index}>
                        <GeoJSON
                            // key={index}
                            data={f}
                            style={{
                                color: mainColor,
                                weight: 5,
                                dashArray:
                                    f.properties.profile === "baseline"
                                        ? "5,15"
                                        : null,
                                lineCap: "round",
                                lineJoin: "round",
                            }}
                        />
                        {f.properties.profile === "baseline" &&
                            f.endpoints?.origin &&
                            f.endpoints?.destination &&
                            Object.keys(f.endpoints).map((k, i) => {
                                console.log(markers, "markers", "k", k, "i", i);
                                const mId = k === "origin" ? 0 : 1;
                                return (
                                    <Polyline
                                        positions={[
                                            [
                                                ...f.endpoints[k].geometry
                                                    .coordinates,
                                            ].reverse(),
                                            [
                                                markers.find(
                                                    (m) => m.idx == mId
                                                ).coordinates.lat,
                                                markers.find(
                                                    (m) => m.idx == mId
                                                ).coordinates.lng,
                                            ],
                                        ]}
                                        pathOptions={{
                                            color: mainColor,
                                            weight: 3,
                                            dashArray: "2,5",
                                            lineCap: "round",
                                            lineJoin: "round",
                                        }}
                                    />
                                );
                            })}
                    </LayerGroup>
                );
            })}
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
