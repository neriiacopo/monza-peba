import "./style.css";

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/theme.js";

import App from "./App.jsx";

// init();

root.render(
    <>
        {/* <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider> */}

        <App />
    </>
);

// async function init() {
//     try {
//         const response = await fetch("http://localhost:8000/bbox");
//         if (!response.ok) {
//             throw new Error(`Failed to fetch data: ${response.statusText}`);
//         }
//         const bbox = await response.json();

//         console.log("Fetched bbox:", bbox);
//     } catch (error) {
//         console.error("Error loading data:", error);
//     }
// }
