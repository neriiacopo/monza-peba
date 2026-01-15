import React, { useRef, useEffect, useState, use } from "react";
import { useTheme } from "@mui/material";

import { normalizeParams } from "@/lib/utils";
import CustomIcon from "@/ui/CustomIcon";

export default function SimpleLineChart({ data, icons = {} }) {
    const theme = useTheme();
    const ref = useRef(null);
    const [size, setSize] = useState({ width: 300, height: 120 });
    const [params, setParams] = useState(null);

    useEffect(() => {
        const obs = new ResizeObserver(([entry]) => {
            setSize({
                width: entry.contentRect.width,
                height: entry.contentRect.height,
            });
        });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    // Normalize the data into [{label, value, icon}, ...]
    useEffect(() => {
        setParams(normalizeParams(data));
    }, [data]);

    const { width, height } = size;
    const barWidth = width / (params ? params.length : 1);
    return (
        <div
            ref={ref}
            style={{ width: "100%", height: "100%" }}
        >
            <svg
                width={width}
                height={height}
            >
                {params &&
                    params.map((d, i) => {
                        const x = i * barWidth;
                        const barHeight = d.value * (height - 30);
                        const y = height - barHeight - 20;

                        return (
                            <g
                                key={i}
                                transform={`translate(${x}, 0)`}
                            >
                                {/* Bar */}
                                <rect
                                    x={barWidth * 0.2}
                                    y={y}
                                    width={barWidth * 0.6}
                                    height={barHeight}
                                    fill={theme.palette.primary.main}
                                    rx={3}
                                />

                                {/* Icon */}

                                <foreignObject
                                    x={barWidth * 0.3}
                                    y={height - 18}
                                    width={16}
                                    height={16}
                                >
                                    <CustomIcon
                                        type={d.label}
                                        color={theme.palette.primary.main}
                                        size={16}
                                    />
                                </foreignObject>
                            </g>
                        );
                    })}
            </svg>
        </div>
    );
}
