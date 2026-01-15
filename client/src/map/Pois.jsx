import { useStore } from "@/store/useStore";
import { useEffect, useMemo, useState } from "react";
import { Chip, lighten } from "@mui/material";

import * as L from "leaflet";
import { renderToString } from "react-dom/server";
import { Marker, Tooltip, useMap, useMapEvents } from "react-leaflet";

import AccessibleIcon from "@mui/icons-material/Accessible";
import NotAccessibleIcon from "@mui/icons-material/NotAccessible";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

import { zoomAtObj } from "@/lib/map.utils";
import { formatAddress } from "@/lib/data.utils.js";

export default function Pois({
    minZoom = 15,
    maxZoom = 20,
    mainColor,
    tags = ["yes", "limited", "no"],

    staggerMs = 70,
}) {
    const map = useMap();
    const addresses = useStore((s) => s.geocoder);
    const route = useStore((s) => s.route);
    const [focusId, setFocusId] = useState(null);
    const [visible, setVisible] = useState(() => {
        const z = map.getZoom();
        return z >= minZoom && z <= maxZoom;
    });

    // keep visibility in sync with zoom
    useMapEvents({
        zoomend: (e) => {
            const z = e.target.getZoom();
            setVisible(z >= minZoom && z <= maxZoom);
        },
    });

    // derive & normalize POIs
    const pois = useMemo(() => {
        if (!addresses?.length) return [];

        return addresses
            .filter((a) => a?.wheelchair && tags.includes(a.wheelchair))
            .map((a, idx) => ({
                id:
                    a.id ??
                    `${a.coordinates?.lat}-${a.coordinates?.lng}-${idx}`,
                position: [a.coordinates.lat, a.coordinates.lng],
                wheelchair: a.wheelchair, // "yes" | "no" | "limited"
                name: a.name ?? a.address ?? "POI",
                raw: a,
                order: idx, // used for stagger
            }));
    }, [addresses, tags]);

    if (!visible || pois.length === 0) return null;

    return (
        <>
            {pois.map((p) => (
                <PoiMarker
                    key={p.id}
                    position={p.position}
                    wheelchair={p.wheelchair}
                    color={mainColor}
                    label={p.name}
                    isFocused={p.id === focusId}
                    onClick={() => {
                        setFocusId(p.id);
                        zoomAtObj(map, p, minZoom, maxZoom);
                    }}
                    delayMs={p.order * staggerMs}
                    tooltipBg={"white"}
                    tooltipColor={mainColor}
                    tooltipBorder={mainColor}
                    marker={p}
                />
            ))}
        </>
    );
}

function PoiMarker({
    position,
    wheelchair,
    color,
    label,
    onClick,
    isFocused,
    delayMs = 0,
    tooltipBg,
    tooltipColor,
    tooltipBorder,
    size = "normal", // or "big"
    sFactor = 0.33,
    marker,
}) {
    // Build the marker icon once per relevant change
    const setMarkers = useStore((s) => s.setMarkers);
    const positiveTags = ["yes", "limited"];

    const icon = useMemo(() => {
        const dims = size === "big" ? 48 : 36;

        const bg =
            wheelchair === "yes"
                ? color
                : wheelchair === "limited"
                ? lighten(color, 0.33)
                : wheelchair === "no"
                ? "white"
                : lighten(color, 0.9);

        const highCol = positiveTags.includes(wheelchair) ? "white" : color;

        const html = renderToString(
            <div
                style={{
                    width: dims,
                    height: dims,
                    borderRadius: "50%",
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: size === "big" ? 0 : 6,
                    color: highCol,
                    boxSizing: "border-box",
                    border: `${
                        isFocused || isFocused == null ? 2 : 2 / sFactor
                    }px solid ${color}`,

                    transform:
                        !wheelchair && !isFocused
                            ? "scale(0.2)"
                            : isFocused || isFocused == null
                            ? "scale(1)"
                            : `scale(${sFactor})`,
                    transition: `transform 1000ms ease-out`,
                }}
            >
                {!isFocused ? null : wheelchair === "yes" ? (
                    <AccessibleIcon />
                ) : wheelchair === "no" ? (
                    <NotAccessibleIcon />
                ) : wheelchair === "limited" ? (
                    <WheelchairPickupIcon />
                ) : (
                    <QuestionMarkIcon />
                )}
            </div>
        );

        return L.divIcon({
            html,
            className: "poi-icon", // keep for CSS hooks
            iconSize: [dims, dims],
            iconAnchor: [dims / 2, dims / 2],
        });
    }, [wheelchair, color, size, isFocused, sFactor]);

    // Entrance animation via class toggle with delay (stagger)
    const [entered, setEntered] = useState(false);
    useEffect(() => {
        const t = window.setTimeout(() => setEntered(true), delayMs);
        return () => window.clearTimeout(t);
    }, [delayMs]);

    return (
        <Marker
            icon={icon}
            position={position}
            eventHandlers={{
                click: (e) => {
                    e.originalEvent?.stopPropagation();
                    if (!isFocused) {
                        onClick?.();
                    } else {
                        console.log("confirm");

                        setMarkers({
                            coordinates: { lat: position[0], lng: position[1] },
                            address: formatAddress(marker),
                            key: Date.now(),
                            feature: marker,
                            sender: "mapHold",
                        });
                    }
                },
            }}
            className={`anim-marker ${
                entered ? "visible-marker" : "hidden-marker"
            }`}
        >
            <Tooltip
                direction="top"
                offset={[0, -9]}
                opacity={1}
                className="poi-tooltip"
                sticky={true}
            >
                <Chip
                    label={label}
                    sx={{
                        bgcolor: tooltipBg,
                        color: tooltipColor,
                        border: `2px solid ${tooltipBorder}`,
                    }}
                />
            </Tooltip>
        </Marker>
    );
}
