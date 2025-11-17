export function opacifyHex(hex, opacity = 0.5) {
    let c = hex.replace("#", "");
    if (c.length === 3) {
        c = c
            .split("")
            .map((x) => x + x)
            .join("");
    }
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r},${g},${b},${opacity})`;
}

export function wrapSvg(content, viewBox) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="${viewBox}"
         width="100%"
         height="100%"
         preserveAspectRatio="xMidYMid meet">
      ${content}
    </svg>
  `;
}

export function extractLayers(svgString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");

    const svg = doc.querySelector("svg");
    const viewBox = svg.getAttribute("viewBox") || "0 0 1000 1000";

    const BASE = doc.getElementById("BASE");
    const BACK = doc.getElementById("BACK");
    const FRONT = doc.getElementById("FRONT");

    return {
        viewBox,
        base: BASE ? BASE.innerHTML : "",
        back: BACK ? BACK.innerHTML : "",
        front: FRONT ? FRONT.innerHTML : "",
    };
}

export function colorizeSvg(svgString, color) {
    if (!svgString) return svgString;
    let s = svgString;

    s = s.replace(/stroke="[^"]*"/g, `stroke="${color}"`);

    return s;
}
