import "./style.css";

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/theme.js";

import { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";
import App from "./App.jsx";

import { useStore } from "./store/useStore.jsx";

function Root() {
    const [loaded, setLoaded] = useState(0);

    const jsons = {
        addresses: {
            file: "./COMUNE_MONZA_Numerazione_Civica_Comunale.geojson",
        },
    };

    useEffect(() => {
        Object.entries(jsons).forEach(([key, { file }]) => {
            fetch(file)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    useStore.setState({ [key]: data.features });
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
