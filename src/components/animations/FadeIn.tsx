"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  once = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

