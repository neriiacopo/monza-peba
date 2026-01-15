import { useRef, useEffect } from "react";
import { getColors } from "@/lib/profiles.config.js";

const colors = getColors();

class Path {
    constructor(
        thickness,
        activationDelay,
        maxLength = 100,
        fadeInDuration = 800
    ) {
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

        this.maxLength = maxLength;
        this.currentLength = 0;
        this.currentOpacity = 0; // start invisible

        this.thickness = thickness;

        // Activation timing
        this.startTime = performance.now() + activationDelay;
        this.fadeInDuration = fadeInDuration;
    }

    isActive(now) {
        return now >= this.startTime;
    }

    update(now, globalActive) {
        const active = this.isActive(now);

        // Fade-in opacity
        if (active && globalActive) {
            const fadeInProgress = Math.min(
                1,
                (now - this.startTime) / this.fadeInDuration
            );
            this.currentOpacity = fadeInProgress;
        }

        // Global fade-out
        if (!globalActive) {
            const opacityF = 10;
            const lengthF = 1;
            this.currentLength = Math.max(0, this.currentLength - lengthF);
            if (this.currentLength <= opacityF) {
                this.currentOpacity = Math.max(
                    0,
                    this.currentOpacity - (1 / opacityF) * lengthF
                );
            }
            // this.currentOpacity = Math.max(0, this.currentOpacity - 0.01);
            return;
        }

        // Not active yet
        if (!active) return;

        // Movement logic
        const rnd = Math.random();
        this.velocity.x += (rnd - 0.5) * 0.1;
        this.velocity.y += (rnd - 0.5) * 0.1;

        const maxSpeed = 2;
        this.velocity.x = Math.max(
            -maxSpeed,
            Math.min(maxSpeed, this.velocity.x)
        );
        this.velocity.y = Math.max(
            -maxSpeed,
            Math.min(maxSpeed, this.velocity.y)
        );

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.points.unshift({ x: this.x, y: this.y });
        if (this.points.length > this.maxLength) this.points.pop();

        this.currentLength = Math.min(this.currentLength + 1, this.maxLength);
    }

    draw(ctx) {
        if (this.currentOpacity <= 0) return;

        const pts = this.points.slice(0, this.currentLength);
        if (pts.length < 2) return;

        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = "round";
        ctx.globalAlpha = this.currentOpacity;

        for (let i = 0; i < pts.length - 1; i++) {
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[i + 1].x, pts[i + 1].y);
        }
        ctx.stroke();
    }

    isDead() {
        return this.currentLength === 0 && this.currentOpacity <= 0;
    }
}

export default function WanderingPaths({
    start = true,
    thickness = 50,
    opacity = 1,
    n = 50,
    activationWindow = 5000,
    maxLength = 300,
}) {
    const canvasRef = useRef(null);
    const pathsRef = useRef([]);
    const animationRef = useRef();

    // Generate paths with staggered activation times
    useEffect(() => {
        if (start) {
            const newPaths = [];
            for (let i = 0; i < n; i++) {
                const delay = Math.random() * activationWindow; // 0 → window
                newPaths.push(new Path(thickness, delay, maxLength));
            }
            pathsRef.current = newPaths;
        }
    }, [start, n]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const animate = () => {
            const now = performance.now();
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let allDead = true;

            pathsRef.current.forEach((path) => {
                path.update(now, start);
                path.draw(ctx);
                if (!path.isDead()) allDead = false;
            });

            if (!start && allDead) {
                // Stop animation completely
                cancelAnimationFrame(animationRef.current);
                return;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [start]);

    return (
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: -2,
                opacity,
                transition: "opacity 2s ease-in-out",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    );
}
