import { useStore } from "@/store/useStore";
import { useMap, Tooltip } from "react-leaflet";
import { Chip } from "@mui/material";
import { getMiddlePoint } from "@/lib/map.utils";
import CustomIconMarker from "@/map/CustomIconMarker.jsx";

import { zoomAtPt } from "@/lib/map.utils";

export default function Alerts({ mainColor }) {
    const alerts = useStore((s) => s.alerts);
    const map = useMap();

    if (!alerts || alerts.length === 0) return null;

    return (
        <>
            {alerts &&
                alerts != null &&
                [...Object.keys(alerts)].map((key) => {
                    if (!alerts[key].segments || alerts[key].visible === false)
                        return null;

                    const accessible = key == "centerline";

                    return alerts[key].segments.map((item, i) => (
                        <CustomIconMarker
                            key={i}
                            position={getMiddlePoint(item.geom)}
                            type={key}
                            color={mainColor}
                            accessible={accessible}
                            onClick={(e) => {
                                zoomAtPt(map, {
                                    position: getMiddlePoint(item.geom),
                                });

                                e.stopPropagation();
                            }}
                        >
                            <Tooltip
                                direction="top"
                                offset={[0, -9]}
                                opacity={1}
                                className="poi-tooltip"
                                sticky={true}
                            >
                                <Chip
                                    label={alerts[key].label}
                                    sx={{
                                        bgcolor: "white",
                                        color: mainColor,
                                        border: `2px solid ${mainColor}`,
                                    }}
                                />
                            </Tooltip>
                        </CustomIconMarker>
                    ));
                })}
        </>
    );
}
