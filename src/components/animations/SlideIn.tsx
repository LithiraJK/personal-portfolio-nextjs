"use client";

import * as React from "react";
import { motion } from "framer-motion";

export type SlideInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
  once?: boolean;
};

export default function SlideIn({
  children,
  className,
  delay = 0,
  direction = "left",
  once = true,
}: SlideInProps) {
  const x = direction === "left" ? -24 : 24;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

