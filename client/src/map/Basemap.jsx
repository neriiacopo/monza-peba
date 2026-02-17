import { useStore } from "@/store/useStore.jsx";
import { useTheme } from "@mui/material";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

import "leaflet-rotate";

import {
    MapContainer,
    TileLayer,
    GeoJSON,
    useMap,
    LayerGroup,
    FeatureGroup,
} from "react-leaflet";
import { useEffect, useRef } from "react";

import { useDeviceOrientation } from "./useDeviceOrientation";

import AddOriginDestination from "./AddOriginDestination";
import GPSMarker from "./GPSMarker";
import Route from "./Route";
import Pois from "./Pois";

import MarkerTest from "./MarkerTest";

import { zoomToAllLayer } from "@/lib/map.utils";
import "./map.css";

export default function Basemap({
    mainColor,
    report = false,
    expand,
    interactive = true,
    currentHeading = 0,
}) {
    const theme = useTheme();
    const mapRef = useRef();
    const routeRef = useRef();
    const markers = useStore((s) => s.markers);
    const route = useStore((s) => s.route);
    const boundary = useStore((s) => s.boundary);
    const { heading, isTracking, requestPermission } = useDeviceOrientation();
    const followGps = useStore((s) => s.followGps);

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
                zoomToAllLayer(map);
            }
        }, 500);
    }, [route, markers, report]);

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
                    pointerEvents: interactive ? "none" : "auto",
                    zIndex: 12,
                }}
            ></div>
            <MapContainer
                id="leaflet-map"
                rotate={false}
                touchRotate={false}
                rotateControl={false}
                bearing={0}
                // --------------------------------
                zoomSnap={0.1}
                zoom={14}
                center={monzaCentroid}
                minZoom={13}
                maxZoom={18}
                zoomControl={false}
                ref={mapRef}
                style={{
                    zIndex: 0,
                    backgroundColor: mainColor,
                }}
                className={"map-container"}
            >
                <RotationHandler
                    heading={followGps ? heading : 0}
                    isTracking={followGps}
                />

                <GeoJSON
                    name="boundary"
                    data={boundary}
                    zIndex={0}
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
                    zIndex={0}
                    id="tiles"
                    url="https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                    crossOrigin
                />

                <>
                    {route && (
                        <Route
                            ref={routeRef}
                            routeData={route}
                            mainColor={mainColor}
                        />
                    )}

                    <FeatureGroup zIndex={700}>
                        <AddOriginDestination
                            mapRef={mapRef}
                            mainColor={mainColor}
                        />
                    </FeatureGroup>
                </>
                <LayerGroup
                    id="pois"
                    style={{ zIndex: 0 }}
                >
                    <Pois
                        minZoom={theme.isMobile ? 17 : 15}
                        maxZoom={18}
                        mainColor={mainColor}
                    />
                </LayerGroup>
                <ResizeHandler trigger={expand} />
                <GPSMarker color={mainColor} />

                {/* {route && (
                    <GPSMarkerDummy
                        color={mainColor}
                        route={route?.features[1]}
                    />
                )} */}

                {/* <MarkerTest /> */}
            </MapContainer>
        </>
    );
}

function ResizeHandler({ trigger }) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;
        setTimeout(() => {
            map.invalidateSize();
            zoomToAllLayer(map);
        }, 0);
    }, [trigger]);

    return null;
}

function RotationHandler({ heading, isTracking }) {
    const map = useMap();

    useEffect(() => {
        if (map && map.setBearing) {
            map.setBearing(heading);
        }
    }, [map, heading, isTracking]);

    return null;
}
