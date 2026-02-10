const flags = {
    stairs: { label: "stairs", value: "STEP_STAIRS", column: "steps" },
    steps: { label: "steps", value: "STEPS", column: "steps" },
};
export function normalizeParams(data) {
    const out = [];

    // 1) steps (binary based on presence)
    // const stepsPresent = data.steps.length > 0 ? 1 : 0;
    for (const key in flags) {
        out.push({
            label: flags[key].label,
            value: data[flags[key].column].includes(flags[key].value) ? 1 : 0,
        });
    }

    // 2) width_min (min-max normalization 0.1 → 2)
    const w = Math.min(Math.max(data.width_min, 0.1), 2);
    const wNorm = (w - 0.1) / (2 - 0.1);
    out.push({ label: "width_min", value: wNorm });

    // 3) crash, pali_luce, slope (already 0–1)
    ["crash", "pali_luce", "slope"].forEach((key) =>
        out.push({ label: key, value: data[key] }),
    );

    return out;
}

export function formatAddress(f) {
    // const address = `${f.properties["nome strada"] || ""}, ${
    //     f.properties.numero || ""
    // }`;

    const address = f.name;

    return address;
}

export function postprocessRoute(route, params) {
    if (!route || !route.features) return route;
    const costs = {};

    // Add total length
    for (const f of route.features) {
        const profile = f.properties.profile || "unknown";
        f.properties.total_length = Math.round(f.properties.total_length);
        f.properties.total_cost = Math.round(f.properties.total_cost);
        costs[profile] = { ...f.properties };
    }

    const error =
        costs.baseline.total_length > 0 && costs.accessible.total_length == 0
            ? "inaccessiblePath"
            : false;

    // Check for Alerts on Fastest
    const baseline = route.features.find(
        (f) => f?.properties?.profile === "baseline",
    );

    const stepsAlerts =
        baseline.segments.filter((item) => item?.metadata?.steps === "STEPS") ||
        [];

    const widthMinAlerts =
        baseline.segments.filter(
            (item) =>
                item?.metadata?.width_min < params.width_min &&
                item?.metadata?.width_min > 0.3, // remove centerlines that are not a problem for fastest
        ) || [];

    const stairsAlerts =
        baseline.segments.filter(
            (item) => item?.metadata?.steps === "STEP_STAIRS",
        ) || [];

    // Check for Alerts on Accessible - centerlines
    const accessible = route.features.find(
        (f) => f?.properties?.profile === "accessible",
    );

    let centerlineAlerts = [];

    if (error === false) {
        centerlineAlerts =
            accessible.segments.filter(
                (item) => item?.metadata?.width_min == 0.1,
            ) || [];
    }

    const stats = {
        overview: costs,
        alerts: {},
    };

    stats.alerts = {};
    stats.alerts.width_min = { total: (widthMinAlerts || []).length };
    stats.alerts.steps = { total: (stepsAlerts || []).length };
    stats.alerts.stairs = { total: (stairsAlerts || []).length };

    const alerts = {
        error: error,
        width_min: {
            segments: [...widthMinAlerts],
            visible: true,
            label: "Marciapiede angusto",
        },
        steps: { segments: [...stepsAlerts], visible: true, label: "Gradino" },
        stairs: {
            segments: [...stairsAlerts],
            visible: true,
            label: "Scalinata",
        },
        centerline: {
            segments: [...centerlineAlerts],
            visible: true,
            label: "Assenza marciapiede",
        },
    };

    // console.log("postprocessRoute", { alerts, stats });
    return { alerts, stats };
}
