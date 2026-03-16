import { useState, useEffect, useRef, useCallback } from "react";

export function useDeviceOrientation(active = true) {
    const [heading, setHeading] = useState(0);
    const lastHeadingRef = useRef(0);
    const lastUpdateTime = useRef(0);
    const hasAbsoluteData = useRef(false);

    const SMOOTHING_FACTOR = 0.2;
    const UPDATE_INTERVAL = 100;

    const handleOrientation = useCallback((e) => {
        const isAbsoluteEvent =
            e.type === "deviceorientationabsolute" || e.absolute === true;

        if (isAbsoluteEvent) {
            hasAbsoluteData.current = true;
        } else if (hasAbsoluteData.current) {
            return;
        }

        const now = Date.now();
        if (now - lastUpdateTime.current < UPDATE_INTERVAL) return;

        let rawHeading =
            e.webkitCompassHeading ?? (e.alpha !== null ? 360 - e.alpha : null);

        if (rawHeading === null) return;

        // Math fix for 360/0 wrap
        let diff = rawHeading - lastHeadingRef.current;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        let smoothed = lastHeadingRef.current + SMOOTHING_FACTOR * diff;
        if (smoothed < 0) smoothed += 360;
        if (smoothed >= 360) smoothed -= 360;

        lastHeadingRef.current = smoothed;
        lastUpdateTime.current = now;
        setHeading(Math.round(smoothed));
    }, []);

    useEffect(() => {
        if (!active) return;

        // Auto-listen for Android/standard browsers
        window.addEventListener(
            "deviceorientationabsolute",
            handleOrientation,
            true,
        );
        window.addEventListener("deviceorientation", handleOrientation, true);

        return () => {
            window.removeEventListener(
                "deviceorientationabsolute",
                handleOrientation,
                true,
            );
            window.removeEventListener(
                "deviceorientation",
                handleOrientation,
                true,
            );
        };
    }, [active, handleOrientation]);

    // iOS requires a manual trigger from a button click
    const requestPermission = async () => {
        if (
            typeof DeviceOrientationEvent !== "undefined" &&
            typeof DeviceOrientationEvent.requestPermission === "function"
        ) {
            try {
                const permission =
                    await DeviceOrientationEvent.requestPermission();
                return permission === "granted";
            } catch (error) {
                console.error("Orientation permission error", error);
                return false;
            }
        }
        return true; // Already granted or not needed
    };

    return { heading, requestPermission };
}
