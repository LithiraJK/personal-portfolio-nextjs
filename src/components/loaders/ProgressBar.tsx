"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ProgressBar() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="h-1.5 w-full rounded-full bg-[color-mix(in_srgb,var(--color-surface)_72%,transparent)] border border-border/60 overflow-hidden">
        <div className="h-full w-3/5 rounded-full bg-primary/80" />
      </div>
    );
  }

  return (
    <div className="h-1.5 w-full rounded-full bg-[color-mix(in_srgb,var(--color-surface)_72%,transparent)] border border-border/60 overflow-hidden">
      <motion.div
        className="loader-progress h-full w-full rounded-full bg-linear-to-r from-primary/50 via-primary to-primary/60 shadow-[0_0_24px_color-mix(in_srgb,var(--color-primary)_50%,transparent)]"
        initial={{ scaleX: 0.2 }}
        animate={{ scaleX: [0.2, 0.85, 0.35] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatType: "loop",
          ease: [0.23, 1, 0.32, 1],
        }}
      />
    </div>
  );
}
