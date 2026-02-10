import { useState } from "react";
import { useStore } from "@/store/useStore.jsx";

import { CircleMarker, useMapEvents } from "react-leaflet";

import { findNearestPoint } from "../lib/map.utils";
import { formatAddress } from "@/lib/data.utils.js";

export default function AddOriginDestination({ mainColor }) {
    const markers = useStore((s) => s.markers);

    const [clickPos, setClickPos] = useState([]);
    return (
        <>
            <MapClickSnapHandler setClickPos={setClickPos} />

            {markers.length != 0 &&
                markers.map((marker, index) => (
                    <CircleMarker
                        key={marker.key}
                        center={[
                            marker.coordinates.lat,
                            marker.coordinates.lng,
                        ]}
                        radius={7}
                        // color={mainColor || "black"}
                        // fillColor={index == 0 ? mainColor : "white"}
                        color={mainColor}
                        fillColor={"white"}
                        fillOpacity={1}
                        style={{ boxShadow: "0 0 5px rgba(0,0,0,1)" }}
                    />
                ))}

            {/* // Show the clicked position (for testing) */}
            {/* {clickPos.length > 0 && (
                <CircleMarker
                    center={clickPos}
                    radius={20}
                    color={"red"}
                    fillColor={"red"}
                    fillOpacity={1}
                />
            )} */}
        </>
    );
}

function MapClickHandler({}) {
    const setMarkers = useStore((s) => s.setMarkers);

    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setMarkers({ coordinates: { lat, lng }, key: Date.now() });
        },
    });

    return null;
}

function MapClickSnapHandler({ setClickPos }) {
    const setMarkers = useStore((s) => s.setMarkers);
    const spatialKindex = useStore.getState().addressesKIndex;
    const markers = useStore((s) => s.markers);

    const handleAction = (latlng) => {
        const { lat, lng } = latlng;
        setClickPos([lat, lng]);

        const nearest = findNearestPoint(spatialKindex, lng, lat);
        setMarkers({
            coordinates: nearest.coordinates,
            address: formatAddress(nearest),
            key: Date.now(),
            feature: nearest,
            sender: "mapHold",
        });
    };

    useMapEvents({
        contextmenu(e) {
            // right on deskto and pressed on mobile
            handleAction(e.latlng);
        },
    });

    return null;
}
