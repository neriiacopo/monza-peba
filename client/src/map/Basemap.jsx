import { useStore } from "@/store/useStore.jsx";

import { getRoute } from "@/lib/api";

import "leaflet/dist/leaflet.css";
// Import Marker and useMapEvents
import {
    MapContainer,
    TileLayer,
    Pane,
    useMapEvents,
    GeoJSON,
    Rectangle,
} from "react-leaflet";
import { useEffect, useRef, useState } from "react";

import AddOriginDestination from "./AddOriginDestination";
import NetworkInspector from "./NetworkInspector";

export default function Basemap() {
    const mainColor = useStore((state) => state.mainColor);
    const mapRef = useRef();
    const pathRef = useRef();
    const bbox = useStore((state) => state.bbox);
    const [route, setRoute] = useState(null);

    async function calcRoute(origin, destination) {
        console.log("running route");
        try {
            const data = await getRoute({ origin, destination });
            setRoute(data);
            // useStore.setState({ route: data.route });
        } catch (err) {
            console.error("Error fetching route:", err);
        }
    }

    useEffect(() => {
        if (route && pathRef.current) {
            pathRef.current.clearLayers();
            pathRef.current.addData(route);
            if (mapRef.current) {
                const bounds = pathRef.current.getBounds();
                const paddedBounds = bounds.pad(0.1);
                mapRef.current.fitBounds(paddedBounds);
            }
        }
    }, [route]);

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <MapContainer
                zoom={10}
                bounds={bbox}
                zoomControl={false}
                ref={mapRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    // backgroundColor: mainColor,
                }}
            >
                <Pane
                    name="basemap"
                    style={{
                        zIndex: 0,
                    }}
                >
                    <TileLayer
                        url="https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                    />
                </Pane>
                <Pane
                    name="color-overlay"
                    style={{
                        zIndex: 1,
                        mixBlendMode: "lighten",
                        transform: "translateZ(0)",
                    }}
                >
                    <Rectangle
                        bounds={[
                            [-90, -180],
                            [90, 180],
                        ]}
                        pathOptions={{
                            fillOpacity: 1,
                            color: mainColor,
                        }}
                    />
                </Pane>

                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: mainColor,
                        mixBlendMode: "lighten",
                        // opacity: 0.2,
                        pointerEvents: "none",
                        zIndex: 10,
                    }}
                />

                {route && (
                    <Pane
                        name="route"
                        style={{ zIndex: 500 }}
                    >
                        <GeoJSON
                            ref={pathRef}
                            style={{ color: mainColor, weight: 5 }}
                        />
                    </Pane>
                )}
                <Pane
                    name="markers"
                    style={{ zIndex: 600 }}
                >
                    <AddOriginDestination
                        mapRef={mapRef}
                        calcRoute={calcRoute}
                    />
                </Pane>
                <Pane
                    name="network"
                    style={{ zIndex: 400 }}
                >
                    <NetworkInspector
                        mapRef={mapRef}
                        // calcRoute={calcRoute}
                    />
                </Pane>
            </MapContainer>
        </div>
    );
}
