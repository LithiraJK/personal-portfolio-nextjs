"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Card, { CardProps } from "@/components/ui/Card";

interface AnimatedCardProps extends CardProps {
  index?: number;
}

export default function AnimatedCard({
  index = 0,
  ...cardProps
}: AnimatedCardProps) {
  const easing: [number, number, number, number] = [0.23, 1, 0.32, 1];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.12,
        ease: easing,
      },
    },
  };

  const hoverVariants: Variants = {
    hover: {
      y: -12,
      boxShadow:
        "0 20px 40px rgba(var(--color-primary-rgb), 0.15), 0 0 60px rgba(var(--color-primary-rgb), 0.08)",
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      className="h-full group"
    >
      <motion.div
        variants={hoverVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="h-full relative"
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary/8 via-primary/5 to-transparent rounded-[var(--radius)] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10"
          animate={{
            boxShadow:
              "0 0 20px rgba(var(--color-primary-rgb), 0.15), 0 0 30px rgba(var(--color-primary-rgb), 0.08)",
          }}
        />

        {/* Card wrapper for scale effect */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="h-full"
        >
          <Card {...cardProps} className="h-full" />
        </motion.div>

        {/* Shimmer overlay on hover */}
        <motion.div
          className="absolute inset-0 rounded-[var(--radius)] overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              opacity: 0.1,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

