import KDBush from "kdbush";
import * as geokdbush from "geokdbush";
import * as L from "leaflet";
import { point } from "@turf/turf";
import { useStore } from "@/store/useStore";

export function buildSpatialIndex(featureCollection) {
    // Keep only point features and prepare them for indexing
    const points = featureCollection.features
        .filter(
            (f) =>
                f.geometry &&
                f.geometry.type === "Point" &&
                Array.isArray(f.geometry.coordinates)
        )
        .map((f, i) => ({
            id: i,
            lng: f.geometry.coordinates[0],
            lat: f.geometry.coordinates[1],
            properties: f.properties,
            feature: f,
        }));

    const index = new KDBush(points.length);
    for (const { lng, lat } of points) index.add(lng, lat);
    index.finish();

    return { index, points };
}

export function buildSpatialIndex_new(data) {
    const points = data.map((item, i) => {
        if (item.type == "poi") {
            return {
                geoid: i,
                lng: item.coordinates.lng,
                lat: item.coordinates.lat,
                label: item.name,
                feature: item,
            };
        } else if (item.type == "addr") {
            const avgCoord = {
                geoid: i,
                lng: item.coordinates.lng,
                lat: item.coordinates.lat,
                label: item.name,
                feature: item,
            };
            return { ...avgCoord };
        }
    });

    const index = new KDBush(points.length);
    for (const { lng, lat } of points) index.add(lng, lat);
    index.finish();
    return { index, points };
}

export function findNearestPoint(spatialIndex, lng, lat) {
    if (!spatialIndex) return null;
    const { index, points } = spatialIndex;

    // 1 = only the closest point
    const idx = geokdbush.around(index, lng, lat, 1);

    const nearest = points[idx];

    return nearest ? { label: nearest.label, ...nearest.feature } : null;
}

export function zoomToAll(
    map,
    {
        excludeIds = [],
        excludePanes = ["basemap", "color-overlay", "pois"],
    } = {}
) {
    const group = L.featureGroup();

    map.eachLayer((layer) => {
        // 1. Exclude tile layers
        if (layer instanceof L.TileLayer) return;

        // 2. Exclude by Leaflet internal id
        if (excludeIds.includes(layer._leaflet_id)) return;

        // 3. Exclude by pane name
        if (layer.options?.pane && excludePanes.includes(layer.options.pane))
            return;

        // 4. Only add layers with getBounds or getLatLng
        if (layer.getBounds) {
            group.addLayer(layer);
        } else if (layer.getLatLng) {
            group.addLayer(layer);
        }
    });

    const bounds = group.getBounds();
    if (bounds.isValid())
        map.flyToBounds(bounds.pad(0.15), { animate: true, duration: 0.15 });
}

export function zoomAtObj(map, p, minZoom = 15, maxZoom = 20) {
    const targetZoom = Math.min(maxZoom, Math.max(minZoom, map.getZoom()));
    map.flyTo(p.position, 18, {
        animate: true,
        duration: 0.6,
    });
}

export function getGPSPosition() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) return reject("No geolocation");

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                resolve({ lat: latitude, lng: longitude });
            },
            reject,
            { enableHighAccuracy: true }
        );
    });
}
