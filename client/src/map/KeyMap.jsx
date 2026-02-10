import { useRef } from "react";
import { MapContainer, TileLayer, Pane, GeoJSON } from "react-leaflet";

import { useStore } from "@/store/useStore.jsx";

import { CircleMarker } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import "./map.css";

export default function KeyMap({
    mainColor,
    location = { lat: null, lng: null },
}) {
    const mapRef = useRef();
    const boundary = useStore((s) => s.boundary);

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
                    pointerEvents: "auto", // block interaction with map
                    zIndex: 1000,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            ></div>
            <MapContainer
                rotate={false}
                rotateControl={false}
                zoom={17}
                center={location ? [location.lat, location.lng] : monzaCentroid}
                zoomControl={false}
                dragging={false}
                touchZoom={false}
                ref={mapRef}
                interactive={false}
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
                <CircleMarker
                    center={[location.lat, location.lng]}
                    radius={7}
                    color={mainColor}
                    fillColor={"white"}
                    fillOpacity={1}
                    style={{ boxShadow: "0 0 5px rgba(0,0,0,1)" }}
                />
            </MapContainer>
        </>
    );
}
