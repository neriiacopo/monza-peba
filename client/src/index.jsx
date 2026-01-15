import "./style.css";

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/theme.js";

import { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";
import App from "./App.jsx";

import { useStore } from "./store/useStore.jsx";
import { useCookieStore } from "./store/useCookieStore.jsx";

import { buildSpatialIndex, buildSpatialIndex_new } from "@/lib/map.utils.js";

const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) ||
    (typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(pointer: coarse)").matches);

function Root() {
    const [loaded, setLoaded] = useState(0);
    const retrieveProfileById = useStore((s) => s.retrieveProfileById);
    const hasProfileData = useCookieStore((s) => s.hasProfileData);
    const profileData = useCookieStore((s) => s.profileData);

    useEffect(() => {
        useStore.setState({
            isMobile,
            page: hasProfileData ? "map" : "landing",
            selectedProfile: hasProfileData
                ? { ...retrieveProfileById(profileData.id), ...profileData }
                : null,
        });
    }, []);

    const jsons = {
        addresses: {
            file: "./COMUNE_MONZA_Numerazione_Civica_Comunale.geojson",
        },
        geocoder: {
            file: "./geocoder_db.json",
        },
        boundary: {
            file: "./boundary_4326.geojson",
        },
    };

    useEffect(() => {
        Object.entries(jsons).forEach(([key, { file }]) => {
            fetch(file)
                .then((res) => res.json())
                .then((data) => {
                    if (key === "addresses") {
                        const addressesKIndex = buildSpatialIndex(data);
                        useStore.setState({
                            [key]: data.features,
                            // addressesKIndex: addressesKIndex,
                        });
                    } else if (key === "geocoder") {
                        // console.log(data);
                        const addressesKIndex = buildSpatialIndex_new(data);
                        useStore.setState({
                            [key]: data,
                            addressesKIndex: addressesKIndex,
                        });
                    } else {
                        useStore.setState({ [key]: data.features });
                    }
                })
                .catch(console.error)
                .finally(() => {
                    setLoaded((loaded) => loaded + 1);
                });
        });
    }, []);

    if (loaded < Object.keys(jsons).length) {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CircularProgress />
            </div>
        );
    }

    return <App />;
}

root.render(<Root />);
