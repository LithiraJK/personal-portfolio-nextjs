"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import Button from "@/components/ui/Button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const { scrollTo } = useScrollAnimation();
  const shortSummary =
    personalInfo.profileSummary.split(". ").slice(0, 2).join(". ") + ".";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const profileCardVariants = {
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
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-border text-xs text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_color-mix(in_srgb,var(--color-primary)_55%,transparent)]" />
              {personalInfo.title}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
            >
              Crafting <span className="text-primary">digital</span> experiences
              with <span className="font-serif italic">precision</span>.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground"
            >
              {shortSummary}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <motion.div variants={itemVariants}>
                <Button onClick={() => scrollTo("contact")}>
                  Contact Me <FiArrowRight aria-hidden="true" />
                </Button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <a
                  href="/pdf/LITHIRA%20JAYANAKA_CV_V2.pdf"
                  download="Lithira-Jayanaka-CV.pdf"
                  aria-label="Download CV as PDF"
                >
                  <Button variant="outline">
                    Download CV <FiDownload aria-hidden="true" />
                  </Button>
                </a>
              </motion.div>
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
            className="relative"
          >
            <motion.div
              className="absolute -inset-6 -z-10 rounded-[calc(var(--radius)+16px)] bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] blur-2xl animate-float"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <motion.div
              className="glass-strong rounded-[var(--radius)] p-4 md:p-5 glow-border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between">
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">2023</span>{" "}
                  <span className="mx-1">—</span> Present
                  <div className="mt-1">Learning & building</div>
                </div>
              </div>

              <motion.div
                className="mt-4 relative aspect-[3/4] rounded-[calc(var(--radius)-4px)] overflow-hidden border border-border bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Image
                  src="/images/profile.png"
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
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="uppercase tracking-[0.25em]">Scroll</div>
          <div className="mt-2 h-6 w-px bg-border mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
