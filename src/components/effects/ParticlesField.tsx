"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type ParticlePoint = {
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
};

export const defaultParticles: ParticlePoint[] = [
  { top: "10%", left: "6%", size: 2, delay: 0.1, duration: 4.8 },
  { top: "14%", left: "22%", size: 3, delay: 0.5, duration: 6.1 },
  { top: "8%", left: "42%", size: 2, delay: 0.9, duration: 5.2 },
  { top: "16%", left: "64%", size: 2, delay: 0.2, duration: 6.4 },
  { top: "9%", left: "83%", size: 3, delay: 1.1, duration: 5.7 },
  { top: "27%", left: "11%", size: 2, delay: 0.8, duration: 4.7 },
  { top: "32%", left: "34%", size: 2, delay: 0.3, duration: 6.8 },
  { top: "29%", left: "53%", size: 3, delay: 1.5, duration: 5.3 },
  { top: "37%", left: "73%", size: 2, delay: 0.6, duration: 6.2 },
  { top: "34%", left: "91%", size: 2, delay: 1.2, duration: 4.9 },
  { top: "51%", left: "4%", size: 3, delay: 1.4, duration: 5.6 },
  { top: "57%", left: "19%", size: 2, delay: 0.4, duration: 6.6 },
  { top: "49%", left: "39%", size: 2, delay: 0.7, duration: 5.4 },
  { top: "56%", left: "59%", size: 3, delay: 1.8, duration: 6.3 },
  { top: "52%", left: "77%", size: 2, delay: 0.9, duration: 4.6 },
  { top: "59%", left: "93%", size: 2, delay: 1.6, duration: 5.9 },
  { top: "72%", left: "8%", size: 2, delay: 1.1, duration: 6.7 },
  { top: "79%", left: "26%", size: 3, delay: 1.9, duration: 5.5 },
  { top: "73%", left: "48%", size: 2, delay: 0.2, duration: 6.1 },
  { top: "81%", left: "68%", size: 2, delay: 0.7, duration: 4.8 },
  { top: "75%", left: "86%", size: 3, delay: 1.3, duration: 5.8 },
  { top: "91%", left: "13%", size: 2, delay: 0.5, duration: 6.4 },
  { top: "88%", left: "37%", size: 2, delay: 1.7, duration: 5.2 },
  { top: "92%", left: "72%", size: 2, delay: 0.8, duration: 6.9 },
  { top: "6%", left: "16%", size: 1, delay: 0.35, duration: 5.9 },
  { top: "12%", left: "31%", size: 2, delay: 1.35, duration: 6.0 },
  { top: "18%", left: "49%", size: 1, delay: 0.65, duration: 4.9 },
  { top: "22%", left: "58%", size: 2, delay: 1.05, duration: 5.5 },
  { top: "24%", left: "81%", size: 1, delay: 0.95, duration: 6.3 },
  { top: "31%", left: "7%", size: 1, delay: 1.45, duration: 4.7 },
  { top: "39%", left: "27%", size: 2, delay: 0.25, duration: 6.5 },
  { top: "43%", left: "45%", size: 1, delay: 1.55, duration: 5.1 },
  { top: "46%", left: "67%", size: 2, delay: 0.75, duration: 5.8 },
  { top: "47%", left: "88%", size: 1, delay: 1.25, duration: 6.6 },
  { top: "62%", left: "14%", size: 2, delay: 0.45, duration: 5.6 },
  { top: "66%", left: "33%", size: 1, delay: 1.15, duration: 4.8 },
  { top: "69%", left: "56%", size: 2, delay: 1.65, duration: 6.7 },
  { top: "71%", left: "79%", size: 1, delay: 0.55, duration: 5.4 },
  { top: "83%", left: "5%", size: 1, delay: 0.85, duration: 6.2 },
  { top: "86%", left: "22%", size: 2, delay: 1.75, duration: 5.3 },
  { top: "89%", left: "53%", size: 1, delay: 1.0, duration: 4.6 },
  { top: "94%", left: "64%", size: 2, delay: 0.3, duration: 6.8 },
  { top: "96%", left: "85%", size: 1, delay: 1.5, duration: 5.0 },
];

type ParticlesFieldProps = {
  particles?: ParticlePoint[];
  className?: string;
  particleClassName?: string;
};

export default function ParticlesField({
  particles = defaultParticles,
  className,
  particleClassName,
}: ParticlesFieldProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const sync = () => setIsMobile(mediaQuery.matches);
    sync();

    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  const wrapperClassName = className ?? "pointer-events-none absolute inset-0 -z-10";
  const dotClassName =
    particleClassName ??
    "pointer-events-none absolute rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(103,232,249,0.9)]";
  const shownParticles = React.useMemo(() => {
    if (isMobile) {
      return particles.filter((_, idx) => idx % 2 === 0).slice(0, 20);
    }

    return particles;
  }, [isMobile, particles]);

  return (
    <div className={wrapperClassName} aria-hidden="true">
      {shownParticles.map((particle, idx) => (
        <motion.span
          key={`${particle.left}-${particle.top}-${idx}`}
          className={dotClassName}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: particle.top,
            left: particle.left,
            willChange: shouldReduceMotion ? "auto" : "transform, opacity",
          }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.6 }
              : {
                  opacity: [0.35, 1, 0.35],
                  scale: [0.95, isMobile ? 1.2 : 1.45, 0.95],
                  y: [0, isMobile ? -3 : -6, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: isMobile ? particle.duration * 1.2 : particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}
