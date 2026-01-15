import { useStore } from "@/store/useStore";

import CustomIconMarker from "@/map/CustomIconMarker.jsx";

export default function Alerts({ mainColor }) {
    const alerts = useStore((s) => s.alerts);

    if (!alerts || alerts.length === 0) return null;

    return (
        <>
            {alerts &&
                alerts != null &&
                [...Object.keys(alerts)].map((key) => {
                    if (!alerts[key].segments || alerts[key].visible === false)
                        return null;

                    return alerts[key].segments.map((item, i) => (
                        <CustomIconMarker
                            // key={item.gid || i}
                            position={[
                                item.geom.coordinates[0][1],
                                item.geom.coordinates[0][0],
                            ]}
                            type={key}
                            color={mainColor}
                        />
                    ));
                })}
        </>
    );
}
