import { API_BASE } from "./config.js";

const DEFAULT_HEADERS = { "Content-Type": "application/json" };

async function request(
    path,
    { method = "GET", headers = {}, body, signal } = {}
) {
    console.log("inside api", API_BASE, path);
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

// // Example typed methods
export const api = {
    get: (p, opts) => request(p, { ...opts, method: "GET" }),
    post: (p, body, opts) => request(p, { ...opts, method: "POST", body }),
};

//////////////////////////
export function getRoute({ origin, destination }) {
    return api.post("/route", { origin, destination });
}

export function getBbox({}) {
    return api.get("/bbox", {});
}

export function getNetwork() {
    return api.get("/network", {});
}
