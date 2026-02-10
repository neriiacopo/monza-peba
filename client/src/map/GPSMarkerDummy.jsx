import { useEffect, useMemo, useRef, useState } from "react";
import { useMap, Polyline } from "react-leaflet";
import { lineString, length, along } from "@turf/turf";

import CustomIconMarker from "./CustomIconMarker";
import { useStore } from "@/store/useStore";

export default function GPSMarker({ color, route }) {
    const map = useMap();
    const activeGps = useStore((s) => s.activeGps);
    const followGps = useStore((s) => s.followGps);
    const endPath = useStore((s) => s.endPath);

    const segments = route ? route.geometry.coordinates : [];

    const [position, setPosition] = useState(null);
    const [path, setPath] = useState([]);

    // Build turf line once per route change
    const turfLine = useMemo(() => {
        if (!segments?.length) return null;
        if (
            segments[0][0].length === 2 &&
            typeof segments[0][0][0] === "number"
        ) {
            return lineString(segments.flat());
        } else {
            return lineString(segments);
        }
    }, [segments]);

    const totalKm = useMemo(() => {
        if (!turfLine) return 0;
        return length(turfLine, { units: "kilometers" });
    }, [turfLine]);

    const rafRef = useRef(null);
    const startRef = useRef(null);
    const lastPathPushRef = useRef(0);

    const finishedRef = useRef(false);

    useEffect(() => {
        if (!activeGps || !turfLine || totalKm <= 0) {
            // stop animation
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
            startRef.current = null;
            finishedRef.current = false; // reset when starting

            return;
        }
        finishedRef.current = false; // reset when starting

        const durationMs = 20000; // full route duration (tweak)
        const pathEveryMs = 50; // push to path 4x/sec (tweak)

        const tick = (ts) => {
            if (!startRef.current) startRef.current = ts;

            const elapsed = ts - startRef.current;
            const t = Math.min(1, elapsed / durationMs);
            const d = t * totalKm;

            const pt = along(turfLine, d, { units: "kilometers" });
            const [lng, lat] = pt.geometry.coordinates;
            const pos = [lat, lng];

            setPosition(pos);

            // Update path less often (avoids huge rerenders)
            if (ts - lastPathPushRef.current > pathEveryMs) {
                lastPathPushRef.current = ts;
                setPath((prev) => {
                    const last = prev[prev.length - 1];
                    // avoid duplicates
                    if (last && last[0] === pos[0] && last[1] === pos[1])
                        return prev;
                    return [...prev, pos];
                });
            }

            if (followGps) {
                map.setView(pos, 18, { animate: true });
            }

            if (t < 1) {
                rafRef.current = requestAnimationFrame(tick);
            } else {
                if (rafRef.current) cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
                startRef.current = null;

                if (!finishedRef.current) {
                    finishedRef.current = true;
                    endPath();
                }
            }
        };

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
            startRef.current = null;
        };
    }, [activeGps, followGps, map, turfLine, totalKm, endPath]);

    if (!activeGps || !position) return null;

    return (
        <>
            <CustomIconMarker
                position={position}
                type="face"
                color={color}
                size="big"
                id="GPS-marker"
            />

            {path.length > 1 && (
                <Polyline
                    positions={path}
                    pathOptions={{
                        color: color || "black",
                        weight: 10,
                        opacity: 1,
                    }}
                />
            )}
        </>
    );
}
