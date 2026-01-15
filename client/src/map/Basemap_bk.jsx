import { useStore } from "@/store/useStore.jsx";

import { getRoute } from "@/lib/api";
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
    useMap,
} from "react-leaflet";
import { useEffect, useRef, useState } from "react";

import AddOriginDestination from "./AddOriginDestination";
import CustomIconMarker from "./CustomIconMarker";
import FollowGPS from "./FollowGPS";
import Route from "./Route";
import Pois from "./Pois";

import { zoomToAll } from "@/lib/map.utils";

import "./map.css";

export default function Basemap({ mainColor, report = false, expand }) {
    const mapRef = useRef();
    const routeRef = useRef();
    const overlayRef = useRef();
    const markers = useStore((s) => s.markers);
    const route = useStore((s) => s.route);
    const boundary = useStore((s) => s.boundary);

    const [maxBounds, setMaxBounds] = useState(null);

    // Set map bounds when boundary changes
    // useEffect(() => {
    //     if (boundary) {
    //         const bounds = L.geoJSON(boundary).getBounds();
    //         setMaxBounds(bounds.pad(0.4));
    //     }
    // }, [boundary]);

    useEffect(() => {
        const map = mapRef.current;
        if (!map || markers.length === 0) return;

        const sortedMarkers = [...markers].sort((a, b) => a.key - b.key);
        const latestMarker = sortedMarkers.at(-1);
        setTimeout(() => {
            if (
                latestMarker?.sender === "textInput" ||
                markers.length !== 1 ||
                route
            ) {
                zoomToAll(map);
            }
        }, 500);
    }, [route, markers, report]);

    // Update overlay color on mainColor change
    useEffect(() => {
        if (overlayRef.current) {
            overlayRef.current.setStyle({
                fillColor: mainColor,
            });
        }
    }, [mainColor]);

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
                    // pointerEvents: "none",
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

                {!report ? (
                    <>
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
                            <AddOriginDestination
                                mapRef={mapRef}
                                mainColor={mainColor}
                            />
                        </Pane>
                    </>
                ) : (
                    <Pane
                        name="center"
                        style={{ zIndex: 600 }}
                    >
                        <CustomIconMarker
                            items={[
                                {
                                    type: "logo",
                                    gid: 1,
                                    geom: { coordinates: [monzaCentroid] },
                                },
                            ]}
                            type="warning"
                            color={mainColor}
                        />
                    </Pane>
                )}
                {/* <RegisterMap /> */}
                <Pane
                    name="pois"
                    style={{ zIndex: 600 }}
                >
                    <Pois
                        minZoom={16}
                        maxZoom={18}
                        mainColor={mainColor}
                    />
                </Pane>
                <ResizeHandler trigger={expand} />
                <FollowGPS color={mainColor} />
            </MapContainer>
        </>
    );
}

// function RegisterMap() {
//     const map = useMap();
//     const setMap = useStore((s) => s.setMap);

//     useEffect(() => {
//         console.log("m", map);
//         setMap(map);
//     }, [map]);

//     return null;
// }

function ResizeHandler({ trigger }) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;
        setTimeout(() => {
            map.invalidateSize();
            zoomToAll(map);
        }, 0);
    }, [trigger]);

    return null;
}
