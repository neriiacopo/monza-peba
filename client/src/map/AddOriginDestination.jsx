import { useStore } from "@/store/useStore.jsx";

import {
    MapContainer,
    TileLayer,
    Pane,
    CircleMarker,
    useMapEvents,
} from "react-leaflet";

import { use, useEffect, useRef, useState } from "react";

export default function AddOriginDestination({ calcRoute }) {
    const mainColor = useStore((state) => state.mainColor);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if (markers.length < 2) {
            useStore.setState({ route: null });
        }
        if (markers.length === 2) {
            const origin = {
                lat: markers[0].position[0],
                lon: markers[0].position[1],
            };
            const destination = {
                lat: markers[1].position[0],
                lon: markers[1].position[1],
            };

            calcRoute(origin, destination);
        }
    }, [markers]);

    return (
        <>
            <MapClickHandler setMarkers={setMarkers} />

            {markers.map((marker, index) => (
                <CircleMarker
                    key={marker.key}
                    center={[marker.position[0], marker.position[1]]}
                    radius={10}
                    color={mainColor || "black"}
                    fillColor={index == 0 ? mainColor : "white"}
                    fillOpacity={1}
                    style={{ boxShadow: "0 0 5px rgba(0,0,0,1)" }}
                />
            ))}
        </>
    );
}

function MapClickHandler({ setMarkers }) {
    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;

            setMarkers((prevMarkers) =>
                prevMarkers.length < 2
                    ? [
                          ...prevMarkers,
                          { position: [lat, lng], key: Date.now() },
                      ]
                    : [{ position: [lat, lng], key: Date.now() }]
            );
        },
    });

    return null;
}
