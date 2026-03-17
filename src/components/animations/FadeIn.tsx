"use client";

import * as React from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

