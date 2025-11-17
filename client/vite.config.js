import react from "@vitejs/plugin-react";
import topLevelAwait from "vite-plugin-top-level-await";
import path from "path";
import svgr from "vite-plugin-svgr";

const isCodeSandbox =
    "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

const isCloudflare = process.env.CLOUDFLARE_PAGES === "true";

export default {
    plugins: [react(), topLevelAwait(), svgr()],
    root: ".",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    publicDir: "public",
    base: "/",
    server: {
        host: true,
        open: !isCodeSandbox,
    },
    build: {
        outDir: "./dist",
        emptyOutDir: true,
        sourcemap: true,
    },
};
