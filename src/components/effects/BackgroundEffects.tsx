"use client";

import * as React from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
};

export default function BackgroundEffects() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const particlesRef = React.useRef<Particle[]>([]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Re-seed particles on resize (keeps distribution even)
      const count = Math.round(Math.min(180, Math.max(80, (w * h) / 22000)));
      particlesRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.6,
        vx: (-0.15 + Math.random() * 0.3) * 0.6,
        vy: (-0.12 + Math.random() * 0.24) * 0.6,
        a: 0.08 + Math.random() * 0.18,
      }));
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    let raf = 0;
    const loop = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      // Very subtle particle field like the reference screenshot
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(32, 178, 166, ${p.a})`;
        ctx.fill();
      }

      raf = window.requestAnimationFrame(loop);
    };

    raf = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Rings / Orbits (SVG) */}
      <svg
        className="absolute inset-0 opacity-35"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#20b2a6" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#20b2a6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#20b2a6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#20b2a6" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#f5a623" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#20b2a6" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        <g transform="translate(700 360)">
          <circle
            r="240"
            fill="none"
            stroke="url(#ringStroke)"
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />
          <circle
            r="320"
            fill="none"
            stroke="url(#ringStroke)"
            strokeWidth="1"
            strokeOpacity="0.24"
          />
          <circle
            r="410"
            fill="none"
            stroke="url(#ringStroke)"
            strokeWidth="0.9"
            strokeOpacity="0.18"
          />
          <circle r="460" fill="url(#ringGlow)" opacity="0.55" />
        </g>
      </svg>
    </div>
  );
}

