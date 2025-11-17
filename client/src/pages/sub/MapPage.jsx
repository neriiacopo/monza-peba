import { useStore } from "@/store/useStore.jsx";
import { useEffect, useState } from "react";

import { getBbox } from "@/lib/api";

import AddressInputAuto from "@/ui/AddressInputAuto.jsx";
import MapArea from "@/ui/MapArea.jsx";

export default function MapPage({ theme }) {
    const [initMap, setInitMap] = useState(false);

    useEffect(() => {
        async function fetchBbox() {
            try {
                const data = await getBbox({});
                useStore.setState({ bbox: data.bbox });
                setInitMap(true);
            } catch (err) {
                console.error("Error fetching bbox:", err);
            }
        }

        fetchBbox();
    }, []);
    return (
        <>
            {/* Input 1 */}
            <AddressInputAuto
                theme={theme}
                label="Da"
                placeholder="Seleziona origine"
            />

            {/* Input 2 */}
            <AddressInputAuto
                theme={theme}
                label="A"
                placeholder="Seleziona destinazione"
            />

            {/* Map Area */}
            <MapArea
                theme={theme}
                initMap={initMap}
            />

            {/* Footer */}
        </>
    );
}
