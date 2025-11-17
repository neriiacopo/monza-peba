import React, { useRef, useEffect, useState } from "react";
import { useStore } from "@/store/useStore.jsx";

import { getColors } from "@/lib/profiles.config.js";

const colors = getColors();

class Path {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.color =
            Object.values(colors)[
                Math.floor(Math.random() * Object.values(colors).length)
            ];
        this.points = [{ x: this.x, y: this.y }];
        this.velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
        };
        this.maxLength = 100;
    }

    update() {
        const rnd = Math.random();
        // Introduce a slight random change to the velocity
        this.velocity.x += (rnd - 0.5) * 0.1;
        this.velocity.y += (rnd - 0.5) * 0.1;

        // Cap the velocity to prevent paths from accelerating too much
        const maxSpeed = 2;
        this.velocity.x = Math.max(
            -maxSpeed,
            Math.min(maxSpeed, this.velocity.x)
        );
        this.velocity.y = Math.max(
            -maxSpeed,
            Math.min(maxSpeed, this.velocity.y)
        );

        // Update position based on the new velocity
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.points.unshift({ x: this.x, y: this.y });

        if (this.points.length > this.maxLength) {
            this.points.pop();
        }
    }

    draw(ctx, thickness) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 50;
        ctx.lineCap = "round";

        for (let i = 0; i < this.points.length - 1; i++) {
            ctx.moveTo(this.points[i].x, this.points[i].y);
            ctx.lineTo(this.points[i + 1].x, this.points[i + 1].y);
        }

        ctx.stroke();
    }
}
export default function WanderingPaths({ thickness = 50, opacity = 1 }) {
    const canvasRef = useRef(null);
    const [active, setActive] = useState(true);

    useEffect(() => {
        if (opacity === 0) {
            setTimeout(() => setActive(false), 3000);
            return;
        }
        setActive(true);
    }, [opacity]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let paths = [];
        const NUM_PATHS = 50;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw each path
            paths.forEach((path) => {
                path.update();
                path.draw(ctx);
            });

            // Call the next animation frame
            requestAnimationFrame(animate);
        };

        // Initialize paths
        for (let i = 0; i < NUM_PATHS; i++) {
            paths.push(new Path(thickness));
        }

        animate();

        // Clean up function
        return () => cancelAnimationFrame(animate);
    }, []);

    return (
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: -1,
                opacity: opacity,
                transition: "opacity 2s ease-in-out",
            }}
        >
            {active && (
                <canvas
                    ref={canvasRef}
                    style={{ position: "absolute", top: 0, left: 0 }}
                />
            )}
        </div>
    );
}
