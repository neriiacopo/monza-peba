import { useStore } from "@/store/useStore";
import { CircleMarker } from "react-leaflet";

export default function MarkerTest() {
    const { index, points } = useStore.getState().addressesKIndex;

    return (
        <>
            {points &&
                points.map((p, idx) => (
                    <CircleMarker
                        key={idx}
                        radius={2}
                        color={p.feature.type == "poi" ? "smokewhite" : "blue"}
                        fillColor={
                            p.feature.type == "poi" ? "smokewhite" : "blue"
                        }
                        center={[p.lat, p.lng]}
                    />
                ))}
        </>
    );
}
