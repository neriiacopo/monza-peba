import { useEffect, useRef, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Pane,
    useMapEvents,
    GeoJSON,
    Rectangle,
    useMap,
} from "react-leaflet";

import { useStore } from "@/store/useStore.jsx";

import { CircleMarker } from "react-leaflet";

import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
// Import Marker and useMapEvents

import { getGPSPosition } from "@/lib/map.utils";

import { zoomToAll } from "@/lib/map.utils";

import "./map.css";

export default function KeyMap({ mainColor, getPosition = null }) {
    const mapRef = useRef();
    const boundary = useStore((s) => s.boundary);

    const [location, setLocation] = useState(null);
    const [maxBounds, setMaxBounds] = useState(null);

    useEffect(() => {
        getGPSPosition().then(setLocation).catch(console.error);
    }, []);

    useEffect(() => {
        if (!location?.lat || !location?.lng) return;
        getPosition(location);
    }, [location]);

    useEffect(() => {
        // Update map view on location change
        if (!location?.lat || !location?.lng) return;

        const map = mapRef.current;
        if (!map) return;

        map.setView([location.lat, location.lng], map.getZoom(), {
            animate: true,
        });
    }, [location, getPosition]);

    // Set map bounds when boundary changes
    // useEffect(() => {
    //     if (boundary) {
    //         const bounds = L.geoJSON(boundary).getBounds();
    //         setMaxBounds(bounds.pad(0.4));
    //     }
    // }, [boundary]);

    const monzaCentroid = [45.5846, 9.2733];

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: mainColor,
                    mixBlendMode: "lighten",
                    pointerEvents: "none",
                    zIndex: 1000,
                }}
            ></div>
            <MapContainer
                zoomSnap={0.1}
                zoom={14}
                center={monzaCentroid}
                minZoom={13}
                maxZoom={18}
                maxBounds={maxBounds}
                // bounds={bbox}
                zoomControl={false}
                dragging={false}
                // webGL={true}
                ref={mapRef}
                style={{
                    zIndex: 1,
                    backgroundColor: mainColor,
                }}
                className={"map-container"}
            >
                <Pane
                    name="basemap"
                    style={{
                        zIndex: 0,
                    }}
                >
                    <GeoJSON
                        data={boundary}
                        style={{
                            color: mainColor,
                            weight: 2,
                            dashArray: "1,5",
                            lineCap: "round",
                            lineJoin: "round",
                            fillOpacity: 0,
                            fillColor: mainColor,
                        }}
                    />
                    <TileLayer
                        url="https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                    />
                </Pane>
                <Pane
                    name="center"
                    style={{ zIndex: 600 }}
                >
                    {location?.lat && location?.lng && (
                        <CircleMarker
                            center={[location.lat, location.lng]}
                            radius={7}
                            color={mainColor}
                            fillColor={"white"}
                            fillOpacity={1}
                            style={{ boxShadow: "0 0 5px rgba(0,0,0,1)" }}
                        />
                    )}
                </Pane>
            </MapContainer>
        </>
    );
}
