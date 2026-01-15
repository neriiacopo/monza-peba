import { useEffect, useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import { useTheme } from "@mui/material";

import { useIconRaw, svgToBase64 } from "@/assets/useIcon";
import { normalizeParams } from "@/lib/data.utils";

export default function SimpleLineChartEcharts({ data }) {
    const theme = useTheme();
    const [params, setParams] = useState([]);

    const mainColor = theme.palette.primary.main;

    useEffect(() => {
        setParams(normalizeParams(data).slice(2, 6));
    }, [data]);

    if (!params || params.length === 0) return null;

    const labels = params.map((d) => d.label);
    const values = params.map((d) => d.value);

    const iconDataURLs = params.map((d) => {
        const raw = useIconRaw(d.label); // <-- correct
        return svgToBase64(raw, mainColor);
    });
    const richMap = {};
    labels.forEach((label, idx) => {
        richMap[`${label}_icon`] = {
            height: 20,
            width: 20,
            backgroundColor: {
                image: iconDataURLs[idx],
            },
        };
    });

    const option = {
        animation: true,
        grid: { top: 10, left: 20, right: 20, bottom: 10 },
        textStyle: { color: mainColor },
        categoryAxis: {
            axisLine: { lineStyle: { color: mainColor } },
            axisTick: { lineStyle: { color: mainColor } },
            axisLabel: { color: mainColor },
            splitLine: { lineStyle: { color: mainColor + "55" } },
        },
        valueAxis: {
            axisLine: { lineStyle: { color: mainColor } },
            axisTick: { lineStyle: { color: mainColor } },
            axisLabel: { color: mainColor },
            splitLine: { lineStyle: { color: mainColor + "55" } },
        },

        xAxis: {
            type: "category",
            data: labels,
            axisLine: { show: false },
            splitLine: { show: false },
            axisLabel: {
                interval: 0,
                formatter: (label) => `{${label}_icon| }`,
                rich: richMap,
            },
        },

        yAxis: [
            {
                type: "value",
                min: 0,
                max: 1,
                axisLabel: {
                    // formatter: (v) => (v * 100).toFixed(0) + "%",
                    // padding: [0, 0, 0, 0],
                    show: false,
                },
            },
            // {
            //     type: "value",
            //     min: 0,
            //     max: 1,
            //     position: "right",
            //     axisLine: { show: false },
            //     axisTick: { show: false },
            //     splitLine: { show: false },
            //     axisLabel: {
            //         show: true,
            //         formatter: (v) => ({ 0: "Min", 1: "Max" }[v] || ""),
            //         padding: [0, 0, 0, 0],
            //     },
            // },
        ],

        series: [
            {
                data: values,
                type: "line",
                smooth: false,
                showSymbol: true,
                symbolSize: 10,
                itemStyle: { color: mainColor, fill: mainColor },
                lineStyle: { width: 3, color: mainColor },
            },
        ],
    };

    // Inject icons manually (ECharts trick)
    // option.xAxis.axisLabel.rich.icon.backgroundColor.image = (value) =>
    //     iconDataURLs[labels.indexOf(value)];

    return (
        <ReactECharts
            option={option}
            style={{ width: "95%", height: "90%" }}
            notMerge={true}
            lazyUpdate={true}
        />
    );
}
