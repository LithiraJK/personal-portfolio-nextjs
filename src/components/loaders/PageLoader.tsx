"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProgressBar from "@/components/loaders/ProgressBar";
import Skeleton from "@/components/ui/Skeleton";

export default function PageLoader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading page content"
    >
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 md:pt-32">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="glass-strong rounded-2xl border border-border/70 p-6 md:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-3 w-full">
              <Skeleton className="h-8 w-56" />
              <Skeleton className="h-4 w-72 max-w-full" />
            </div>
            <div className="h-12 w-12 rounded-full border border-primary/35 bg-primary/10 shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_35%,transparent)]" />
          </div>

          <div className="mt-7">
            <ProgressBar />
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2" aria-hidden="true">
          {Array.from({ length: 4 }).map((_, idx) => (
            <motion.div
              key={`page-loader-card-${idx}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : idx * 0.06 }}
              className="glass-strong rounded-(--radius) border border-border/70 p-6 space-y-4"
            >
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-11/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
