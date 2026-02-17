import { useState, useEffect, useRef } from "react";
import { useMap, Polyline } from "react-leaflet";
import { point, booleanPointInPolygon, distance } from "@turf/turf";

import CustomIconMarker from "./CustomIconMarker";

import { useStore } from "@/store/useStore";

export default function GPSMarker({ type, color }) {
    const map = useMap();
    const activeGps = useStore((s) => s.activeGps);
    const followGps = useStore((s) => s.followGps);
    const boundary = useStore((s) => s.boundary);
    const [position, setPosition] = useState(null);

    const [path, setPath] = useState([]);
    const updatePathGPS = useStore((s) => s.updatePathGPS);
    const pathGPS = useStore((s) => s.pathGPS);

    const lastStoredPointRef = useRef(null);

    const checkInside = true;

    const monzaCentroid = [45.5846, 9.2733];

    useEffect(() => {}, [path]);

    useEffect(() => {
        let watchId;

        if (activeGps) {
            if (navigator.geolocation) {
                watchId = navigator.geolocation.watchPosition(
                    (pos) => {
                        const { latitude, longitude } = pos.coords;
                        const current = [latitude, longitude];
                        if (boundary) {
                            const pt = point([longitude, latitude]); //inverted for turf

                            const inside = booleanPointInPolygon(
                                pt,
                                boundary[0],
                            );

                            // 1. Boundary Check
                            if (boundary) {
                                const pt = point([longitude, latitude]);
                                const inside = booleanPointInPolygon(
                                    pt,
                                    boundary[0],
                                );
                                if (checkInside && !inside) {
                                    useStore.setState({
                                        activeGps: false,
                                        followGps: false,
                                        modal: "GPSOutsideBoundary",
                                    });
                                    return;
                                }
                            }

                            // 2. Immediate UI Update (High Res)
                            setPosition(current);
                            if (followGps) {
                                setPath((prev) => [...prev, current]);
                                map.setView(current, 18, { animate: true });
                            }

                            // 3. Conditional Store Update (Low Res - 5 Meters)
                            const lastPoint = lastStoredPointRef.current;
                            let isFarEnough = true;

                            if (lastPoint) {
                                const from = point([
                                    lastPoint[1],
                                    lastPoint[0],
                                ]);
                                if (
                                    distance(from, pt, { units: "meters" }) < 5
                                ) {
                                    isFarEnough = false;
                                }
                            }

                            if (isFarEnough) {
                                lastStoredPointRef.current = current;
                                updatePathGPS(current);
                            }
                        }
                    },
                    console.error,
                    { enableHighAccuracy: true },
                );
            }

            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, [map, activeGps, followGps, boundary]);

    if (!position || !activeGps) return null;

    return (
        <>
            <CustomIconMarker
                position={position}
                type={"face"}
                color={color}
                size={"big"}
                id={"GPS-marker"}
            />
            {path.length > 1 && (
                <Polyline
                    positions={path}
                    pathOptions={{
                        color: color || "black",
                        weight: 10,
                        opacity: 1,
                        // dashArray: "5, 10", // Optional: makes it a dashed line
                    }}
                />
            )}
        </>
    );
}
