import { useStore } from "@/store/useStore.jsx";

import {
    MapContainer,
    TileLayer,
    Pane,
    CircleMarker,
    useMapEvents,
} from "react-leaflet";

import { use, useEffect, useRef, useState } from "react";

export default function AddOriginDestination() {
    const mainColor = useStore((state) => state.mainColor);
    const calcRoute = useStore((state) => state.calcRoute);

    const { markers } = useStore();

    useEffect(() => {
        if (markers.length < 2) {
            useStore.setState({ route: null });
        }
        if (markers.length === 2) {
            const origin = {
                lat: markers[0].coordinates[0],
                lon: markers[0].coordinates[1],
            };
            const destination = {
                lat: markers[1].coordinates[0],
                lon: markers[1].coordinates[1],
            };

            calcRoute(origin, destination);
        }
    }, [markers]);

    return (
        <>
            <MapClickHandler />

            {markers.length != 0 &&
                markers.map((marker, index) => (
                    <CircleMarker
                        key={marker.key}
                        center={[marker.coordinates[0], marker.coordinates[1]]}
                        radius={7}
                        // color={mainColor || "black"}
                        // fillColor={index == 0 ? mainColor : "white"}
                        color={mainColor}
                        fillColor={"white"}
                        fillOpacity={1}
                        style={{ boxShadow: "0 0 5px rgba(0,0,0,1)" }}
                    />
                ))}
        </>
    );
}

function MapClickHandler() {
    const { setMarkers } = useStore();

    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setMarkers({ coordinates: [lat, lng], key: Date.now() });
        },
    });

    return null;
}
