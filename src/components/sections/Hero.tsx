"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import Button from "@/components/ui/Button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import ParticlesField from "@/components/effects/ParticlesField";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiArrowRight, FiChevronDown } from "react-icons/fi";

const Hero = () => {
  const { scrollTo } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();
  const shortSummary =
    personalInfo.profileSummary.split(". ").slice(0, 2).join(". ") + ".";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const profileCardVariants: Variants = {
    hidden: { opacity: 0, x: 30, rotateY: -20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 md:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-zinc-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_65%_at_50%_52%,rgba(3,180,168,0.18)_0%,rgba(2,20,26,0.75)_48%,rgba(3,6,12,0.98)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[52%] -z-10 h-75 w-[82vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(28,201,190,0.2)_0%,rgba(28,201,190,0.08)_35%,rgba(28,201,190,0)_72%)] blur-lg md:blur-2xl" />
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 -z-10 h-px bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(49,231,221,0.45)_50%,rgba(0,0,0,0)_100%)] opacity-65 blur-[1px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-8 w-[90vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(35,220,210,0.2),rgba(35,220,210,0))] blur-md md:blur-xl" />

      <ParticlesField className="pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 max-w-2xl lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-zinc-900/65 px-3 py-1.5 text-xs text-zinc-300 md:backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(52,221,213,0.85)]" />
              {personalInfo.title}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-semibold leading-[1.02] tracking-tight text-zinc-100 sm:text-5xl md:text-6xl"
            >
              Innovative{" "}
              <span className="bg-linear-to-r from-emerald-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                Explorer
              </span>
              <br />
              Crafting Intelligent
              <br />
              <span className="font-serif italic text-zinc-50"> Solutions.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base"
            >
              {shortSummary}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                onClick={() => scrollTo("contact")}
                className="h-12 rounded-full border border-cyan-300/50 bg-linear-to-r from-teal-400 to-cyan-300 px-6 text-zinc-950 shadow-[0_0_26px_rgba(44,220,212,0.35)] transition hover:brightness-105"
              >
                Contact Me <FiArrowRight aria-hidden="true" />
              </Button>
              <a
                href="/pdf/LITHIRA%20JAYANAKA_CV_V2.pdf"
                download="Lithira-Jayanaka-CV.pdf"
                aria-label="Download CV as PDF"
              >
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-zinc-700/85 bg-zinc-900/40 px-6 text-zinc-100 hover:border-cyan-300/40 hover:bg-zinc-900"
                >
                  Download CV <FiDownload aria-hidden="true" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex items-center gap-4 text-muted-foreground"
            >
              <span className="text-xs">Follow me:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-foreground transition"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-foreground transition"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={profileCardVariants}
            initial="hidden"
            animate="visible"
            className="order-1 relative w-full max-w-72 sm:max-w-80 md:max-w-86 mx-auto lg:order-2 lg:max-w-90 lg:ml-auto"
          >
            <motion.div
              className="absolute -inset-6 -z-10 rounded-[calc(var(--radius)+16px)] bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] blur-xl md:blur-2xl md:animate-float"
              animate={
                shouldReduceMotion
                  ? { opacity: 0.7 }
                  : {
                      opacity: [0.5, 1, 0.5],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
              }
            />
            <motion.div
              className="glass-strong rounded-(--radius) p-3.5 md:p-4 glow-border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between">
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">2024</span>{" "}
                  <span className="mx-1">—</span> Present
                  <div className="mt-1">Learning &amp; building</div>
                </div>
              </div>

              <motion.div
                className="mt-4 relative aspect-3/4 rounded-[calc(var(--radius)-4px)] overflow-hidden border border-border bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Image
                  src="/images/lithira-jayanaka.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </motion.div>

              <motion.div
                className="flex items-center mt-2 justify-end w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {personalInfo.availability}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center text-xs text-muted-foreground"
          animate={shouldReduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
          }
        >
          <div className="uppercase tracking-[0.25em]">Scroll</div>
          <motion.div
            className="mt-2 flex justify-center text-primary"
            animate={
              shouldReduceMotion
                ? { y: 0, opacity: 0.85 }
                : { y: [0, 7, 0], opacity: [0.55, 1, 0.55] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 1.5, ease: "easeInOut", repeat: Infinity }
            }
            aria-hidden="true"
          >
            <FiChevronDown className="text-base" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
