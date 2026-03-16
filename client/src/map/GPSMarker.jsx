import { useState, useEffect, useRef } from "react";
import { useMap, Polyline } from "react-leaflet";
import { point, distance } from "@turf/turf";
import { checkGpsPositionWithinBoundary } from "@/lib/map.utils";
import CustomIconMarker from "./CustomIconMarker";
import { useStore } from "@/store/useStore";
import { useDeviceOrientation } from "./useDeviceOrientation";

export default function GPSMarker({ color }) {
    const map = useMap();
    const activeGps = useStore((s) => s.activeGps);
    const followGps = useStore((s) => s.followGps);
    const boundary = useStore((s) => s.boundary);
    const updatePathGPS = useStore((s) => s.updatePathGPS);

    const [position, setPosition] = useState(null);
    const [path, setPath] = useState([]);
    const [isInside, setIsInside] = useState(false);

    const lastProcessedTime = useRef(0);
    const lastCoords = useRef(null);
    const { heading, requestPermission } = useDeviceOrientation(activeGps);
    const TIME_THROTTLE = 3000; //ms
    const DISTANCE_THROTTLE = 10; //meters

    const followGpsRef = useRef(followGps);
    useEffect(() => {
        followGpsRef.current = followGps;
    }, [followGps]);

    // Permit compass
    useEffect(() => {
        if (activeGps) {
            requestPermission();
        }
    }, [activeGps]);

    // Filter activation based on boundary
    useEffect(() => {
        if (activeGps && boundary && !isInside) {
            checkGpsPositionWithinBoundary()
                .then((pos) => {
                    if (pos) {
                        setIsInside(true);
                    } else {
                        setIsInside(true);
                        // useStore.setState({
                        //     activeGps: false,
                        //     followGps: false,
                        // });
                    }
                })
                .catch((err) => {
                    console.error("Effect GPS Error:", err);
                    useStore.setState({ activeGps: false, followGps: false });
                });
        }

        if (!activeGps) {
            setIsInside(false);
            setPath([]);
        }
    }, [activeGps, boundary, isInside]);

    // Path collection
    useEffect(() => {
        if (!activeGps || !isInside) return;

        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                const now = Date.now();
                const current = [latitude, longitude];

                // Time throttle
                if (now - lastProcessedTime.current < TIME_THROTTLE) return;

                // Distance throttle
                const currentTurfCoords = [longitude, latitude];
                if (lastCoords.current) {
                    const d = distance(
                        point(lastCoords.current),
                        point(currentTurfCoords),
                        { units: "meters" },
                    );
                    if (d < DISTANCE_THROTTLE) return;
                }

                // Update refs
                lastProcessedTime.current = now;
                lastCoords.current = currentTurfCoords;

                setPosition(current);
                setPath((prev) => [...prev, current]);
                updatePathGPS(current);

                if (followGpsRef.current) {
                    map.panTo(current);
                }
            },
            console.error,
            {
                enableHighAccuracy: false,
                maximumAge: 10000,
            },
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, [activeGps, isInside, map]);

    if (!position || !activeGps) return null;

    return (
        <>
            <CustomIconMarker
                position={position}
                type={"face"}
                color={color}
                size={"big"}
                id={"GPS-marker"}
                heading={heading}
            />
            {path.length > 1 && (
                <Polyline
                    positions={path}
                    pathOptions={{
                        color: color || "black",
                        weight: 6,
                        smoothFactor: 2.0,
                    }}
                />
            )}
        </>
    );
}
