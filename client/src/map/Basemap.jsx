import { useStore } from "@/store/useStore.jsx";

import { getRoute } from "@/lib/api";
import getTheme from "@/ui/theme.js";
import * as L from "leaflet";
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
import Route from "./Route";

export default function Basemap({ mainColor }) {
    // const theme = getTheme();
    // const mainColor = theme.palette.primary.main;
    const mapRef = useRef();
    const routeRef = useRef();
    const overlayRef = useRef();
    const markers = useStore((state) => state.markers);
    const route = useStore((state) => state.route);

    const bbox = useStore((state) => state.bbox);

    useEffect(() => {
        const map = mapRef.current;
        if (!map) return;

        const bounds = L.latLngBounds([]);

        if (route && routeRef.current) {
            try {
                const routeBounds = routeRef.current.getBounds();
                if (routeBounds.isValid()) bounds.extend(routeBounds);
            } catch (_) {}
        }

        if (markers?.origin) bounds.extend(markers.origin);
        if (markers?.destination) bounds.extend(markers.destination);

        if (bounds.isValid()) {
            map.fitBounds(bounds.pad(0.15), { animate: true });
        }
    }, [route, markers]);

    useEffect(() => {
        if (overlayRef.current) {
            overlayRef.current.setStyle({
                fillColor: mainColor,
            });
        }
    }, [mainColor]);

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
            }}
        >
            <MapContainer
                zoomSnap={0.1}
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
                        key={overlayRef}
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
                        <Route
                            ref={routeRef}
                            routeData={route}
                            mainColor={mainColor}
                        />
                    </Pane>
                )}
                <Pane
                    name="markers"
                    style={{ zIndex: 600 }}
                >
                    <AddOriginDestination mapRef={mapRef} />
                </Pane>
                {/* <Pane
                    name="network"
                    style={{ zIndex: 400 }}
                >
                    <NetworkInspector
                        mapRef={mapRef}
                        // calcRoute={calcRoute}
                    />
                </Pane> */}
            </MapContainer>
        </div>
    );
}
