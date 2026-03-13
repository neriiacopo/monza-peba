import KDBush from "kdbush";
import * as geokdbush from "geokdbush";
import * as L from "leaflet";
import { point, booleanPointInPolygon } from "@turf/turf";

import { useStore } from "../store/useStore";

export function preprocessGeocoder(data) {
    const points = data.map((item, i) => {
        if (item.type == "poi") {
            return { ...item };
        } else if (item.type == "addr") {
            const addrs = [];
            if (item.house_addr.length >= 1) {
                item?.house_addr.map((addr, j) => {
                    const label = `${item.name}, ${addr.number}`;
                    return addrs.push({
                        ...item,
                        id: `${i}-${j}`,
                        coordinates: addr.coordinates,
                        name: label,
                    });
                });
            }
            return addrs;
        }
    });

    const pointsFlat = points.flat();

    return pointsFlat;
}

export function buildSpatialIndex(featureCollection) {
    // Keep only point features and prepare them for indexing
    const points = featureCollection.features
        .filter(
            (f) =>
                f.geometry &&
                f.geometry.type === "Point" &&
                Array.isArray(f.geometry.coordinates),
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

export function buildSpatialIndexGeocoder(data) {
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
            // const avgCoord = {
            //     geoid: i,
            //     lng: item.coordinates.lng,
            //     lat: item.coordinates.lat,
            //     label: item.name,
            //     feature: item,
            // };
            // return { ...avgCoord };

            const addrs = [];
            if (item.house_addr.length >= 1) {
                item?.house_addr.map((addr, j) => {
                    const label = `${item.name}, ${addr.number}`;
                    return addrs.push({
                        geoid: `${i}-${j}`,
                        lng: addr.coordinates.lng,
                        lat: addr.coordinates.lat,
                        label: label,
                        feature: {
                            ...item,
                            coordinates: {
                                lng: addr.coordinates.lng,
                                lat: addr.coordinates.lat,
                            },
                            name: label,
                        },
                    });
                });
            }
            return addrs;
        }
    });

    const pointsFlat = points.flat();

    const index = new KDBush(pointsFlat.length);
    for (const { lng, lat } of pointsFlat) index.add(lng, lat);
    index.finish();

    return { index, points: pointsFlat };
}

export function findNearestPoint(spatialIndex, lng, lat) {
    if (!spatialIndex) return null;
    const { index, points } = spatialIndex;

    // 1 = only the closest point
    const idx = geokdbush.around(index, lng, lat, 1);

    const nearest = points[idx];

    // Double Checking proximity
    // let results = geokdbush.around(index, lng, lat, 10);
    // console.log("Nearby points:", results);
    // results = results.map((idx) => {
    //     const point = points[idx];
    //     return {
    //         ...point,
    //         dist: geokdbush.distance(lng, lat, point.lng, point.lat),
    //     };
    // });
    // results.sort((a, b) => a.dist - b.dist);
    // const nearest = results[0];

    return nearest ? { label: nearest.label, ...nearest.feature } : null;
}

export function zoomToAllLayer(
    map,
    {
        excludeIds = ["tiles", "boundary", "pois"], // e.g. [tilesId]
        excludePanes = [],
        excludeFeatureGroups = true,
    } = {},
) {
    const group = L.featureGroup();

    map.eachLayer((layer) => {
        // 1) Exclude tile layers
        if (layer instanceof L.TileLayer) return;

        // 2) Exclude by Leaflet internal id (works for any layer, including groups)
        if (excludeIds.includes(layer._leaflet_id)) {
            return;
        }

        if (excludeFeatureGroups) {
            // FeatureGroup extends LayerGroup, so this catches both:
            if (layer instanceof L.LayerGroup) {
                return;
            }
        }

        const pane = layer?.options?.pane;
        if (pane && excludePanes.includes(pane)) return;

        if (layer?.options?.zoomIgnore) return;

        if (layer?.defaultOptions?.name) {
            return;
        }

        if (typeof layer.getBounds === "function") {
            group.addLayer(layer);
            return;
        }

        if (typeof layer.getLatLng === "function") {
            group.addLayer(layer);
            return;
        }
    });

    const bounds = group.getBounds();
    if (bounds.isValid()) {
        map.flyToBounds(bounds.pad(0.15), { animate: true, duration: 0.15 });
    }
}

export function zoomToAll(
    map,
    {
        excludeIds = ["GPS-marker"],
        excludePanes = ["basemap", "color-overlay", "pois"],
    } = {},
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

export function zoomAtPt(map, p, minZoom = 15, maxZoom = 20) {
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
            { enableHighAccuracy: true },
        );
    });
}

import { toPng } from "html-to-image";

export async function screenshotMapById(
    mapElementId,
    {
        filename = "map.png",
        pixelRatio = 1,
        hideSelectors = [".leaflet-control-container"],
    } = {},
    watermarkElementId = "TT-logo-footer",
) {
    const node = document.getElementById(mapElementId);
    if (!node) throw new Error(`No element found with id="${mapElementId}"`);

    // Add watermark
    const wmEl = document.getElementById(watermarkElementId);
    const rect = wmEl.getBoundingClientRect();
    const logoClone = wmEl.cloneNode(true);
    logoClone.style.position = "absolute";
    logoClone.style.top = `${rect.top}px`;
    logoClone.style.left = `${rect.left}px`;
    logoClone.style.width = `${rect.width}px`;
    logoClone.style.height = `${rect.height}px`;
    logoClone.style.opacity = "1";
    logoClone.style.zIndex = "1000";

    node.appendChild(logoClone);

    // Optional: temporarily hide UI controls (zoom buttons etc.)
    const hidden = [];
    hideSelectors.forEach((sel) => {
        node.querySelectorAll(sel).forEach((el) => {
            hidden.push([el, el.style.visibility]);
            el.style.visibility = "hidden";
        });
    });

    // Wait one frame so Leaflet finishes any ongoing paint
    await new Promise((r) => requestAnimationFrame(r));

    try {
        const dataUrl = await toPng(node, {
            skipFonts: true, // firefox bugfix:
            cacheBust: true,
            pixelRatio, // 1 = fast; 2 = sharper
            fetchRequestInit: { mode: "cors" },
        });

        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();

        return dataUrl;
    } finally {
        hidden.forEach(([el, prev]) => (el.style.visibility = prev));
        logoClone.remove();
    }
}

export function getMiddlePoint(geom) {
    return [
        geom.coordinates[0][1] +
            (geom.coordinates[1][1] - geom.coordinates[0][1]) / 2,
        geom.coordinates[0][0] +
            (geom.coordinates[1][0] - geom.coordinates[0][0]) / 2,
    ];
}

export function checkGpsPositionWithinBoundary() {
    return new Promise((resolve) => {
        const boundary = useStore.getState().boundary;

        if (!boundary) {
            return resolve(false);
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                const pt = point([longitude, latitude]);

                const inside = booleanPointInPolygon(pt, boundary[0]);

                if (inside) {
                    resolve(pos);
                } else {
                    useStore.setState({ modal: "GPSOutsideBoundary" });
                    resolve(false);
                }
            },
            (err) => {
                console.error("GPS Error:", err);
                resolve(false);
            },
            { enableHighAccuracy: true },
        );
    });
}
