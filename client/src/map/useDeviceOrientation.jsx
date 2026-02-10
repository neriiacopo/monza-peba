import { useState, useEffect } from "react";

export function useDeviceOrientation() {
    const [heading, setHeading] = useState(0);
    const [isTracking, setIsTracking] = useState(false);

    const [isPermissionGranted, setIsPermissionGranted] = useState(false);

    const handleOrientation = (event) => {
        setHeading(event.webkitCompassHeading || event.alpha);
    };

    const requestPermission = async () => {
        // Check if the browser requires explicit permission (iOS 13+)
        if (typeof DeviceOrientationEvent.requestPermission === "function") {
            try {
                const permission =
                    await DeviceOrientationEvent.requestPermission();
                if (permission === "granted") {
                    window.addEventListener(
                        "deviceorientation",
                        handleOrientation,
                    );
                    setIsPermissionGranted(true);
                    setIsTracking(true);
                }
            } catch (error) {
                console.error("Permission denied for orientation sensors");
            }
        } else {
            // For Android or older iOS, just add the listener
            window.addEventListener("deviceorientation", handleOrientation);
            setIsPermissionGranted(true);
            setIsTracking(true);
        }
    };

    useEffect(() => {
        requestPermission();
        return () => {
            window.removeEventListener("deviceorientation", handleOrientation);
        };
    }, []);

    return { heading, isTracking, requestPermission };
}
