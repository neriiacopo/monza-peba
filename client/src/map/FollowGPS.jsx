import { useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import { point, booleanPointInPolygon } from "@turf/turf";

import CustomIconMarker from "./CustomIconMarker";

import { useStore } from "@/store/useStore";

export default function FollowGPS({ type, color }) {
    const map = useMap();
    const activeGps = useStore((s) => s.activeGps);
    const boundary = useStore((s) => s.boundary);
    const [position, setPosition] = useState(null);

    useEffect(() => {
        let watchId;

        if (activeGps) {
            if (navigator.geolocation) {
                watchId = navigator.geolocation.watchPosition(
                    (pos) => {
                        const { latitude, longitude } = pos.coords;
                        const current = [latitude, longitude];
                        // --- Turf check ---
                        if (boundary) {
                            const pt = point(current);
                            const inside = booleanPointInPolygon(
                                pt,
                                boundary[0]
                            );

                            // Spatial check inside boundary
                            // if (!inside) {
                            //     useStore.setState({
                            //         modal: "GPSOutsideBoundary",
                            //         activeGps: false,
                            //     });
                            //     return null;
                            //     // alert("You are outside the permitted area.");
                            // } else {
                            //     setPosition(current);
                            //     map.setView(current, map.getZoom(), {
                            //         animate: true,
                            //     });
                            // }
                            setPosition(current);
                            map.setView(current, map.getZoom(), {
                                animate: true,
                            });
                        }
                    },
                    console.error,
                    { enableHighAccuracy: true }
                );
            }

            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, [map, activeGps]);

    if (!position || !activeGps) return null;

    return (
        <CustomIconMarker
            position={position}
            type={"face"}
            color={color}
            size={"big"}
        />
    );
}
