import { Box, Stack, IconButton, Button, Chip } from "@mui/material";
import { useState, useEffect } from "react";

import { useStore } from "@/store/useStore.jsx";

export default function RouteStats() {
    const [show, setShow] = useState(true);
    const routeStats = useStore((s) => s.routeStats);

    return <> </>;
}
