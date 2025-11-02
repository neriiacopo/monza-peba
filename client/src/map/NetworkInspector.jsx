import { useStore } from "@/store/useStore.jsx";
import { GeoJSON } from "react-leaflet";

import { getNetwork } from "@/lib/api";
import { useEffect, useRef, useState } from "react";

export default function NetworkInspector() {
    const page = useStore((state) => state.page);
    const mainColor = useStore((state) => state.mainColor);
    const netRef = useRef();
    const [network, setNetwork] = useState(null);

    useEffect(() => {
        if (page === "explore") {
            async function fetchNetwork() {
                try {
                    const data = await getNetwork();
                    console.log("Network data:", data);
                    setNetwork(data);
                } catch (error) {
                    console.error("Error fetching network data:", error);
                }
            }
            fetchNetwork();
        }
    }, [page]);

    return (
        <>
            {network && (
                <GeoJSON
                    ref={netRef}
                    style={{ color: mainColor, weight: 5 }}
                />
            )}
        </>
    );
}
