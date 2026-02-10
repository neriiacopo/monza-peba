import { API_BASE } from "./config.js";

const DEFAULT_HEADERS = { "Content-Type": "application/json" };

async function request(
    path,
    { method = "GET", headers = {}, body, signal } = {},
) {
    const res = await fetch(`${API_BASE}${path}`, {
        method,
        headers: { ...DEFAULT_HEADERS, ...headers },
        body: body ? JSON.stringify(body) : undefined,
        signal,
        credentials: "omit", // or 'include' if you use cookies/CORS accordingly
    });

    // Handle non-2xx
    if (!res.ok) {
        const msg = await res.text().catch(() => res.statusText);
        throw new Error(`HTTP ${res.status}: ${msg}`);
    }
    // Try JSON, fallback to text
    const text = await res.text();
    try {
        return JSON.parse(text);
    } catch {
        return text;
    }
}

// basic template
export const api = {
    get: (p, opts) => request(p, { ...opts, method: "GET" }),
    post: (p, body, opts) => request(p, { ...opts, method: "POST", body }),
};

//////////////////////////
export function getRoute({ origin, destination, params, metadata }) {
    const res = api.post("/route", { origin, destination, params, metadata });
    return res;
}

export function getBbox({}) {
    return api.get("/bbox", {});
}

export function getNetwork() {
    return api.get("/network", {});
}

export function sendReport(report) {
    const payload = {
        ...report,
        geolocation: {
            lat: parseFloat(report.geolocation.lat),
            lon: parseFloat(report.geolocation.lng), // Convert lng -> lon for db
        },
    };

    delete payload.geolocation.lng;

    return api.post("/report", payload);
}

export function sendGPS({ callId, status = null, path = null, rating = null }) {
    const payload = {
        callId,
        ...(path &&
            path.length > 0 && {
                path: path.map((p) => [p[1], p[0]]),
            }),
        ...(status && { status }),
        ...(rating !== null && { rating }),
    };

    return api.post("/telemetry", payload);
}
