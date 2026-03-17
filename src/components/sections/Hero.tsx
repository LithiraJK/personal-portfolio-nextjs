"use client";

import Image from "next/image";
import { personalInfo } from "@/lib/constants";
import Button from "@/components/ui/Button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const { scrollTo } = useScrollAnimation();
  const shortSummary =
    personalInfo.profileSummary.split(". ").slice(0, 2).join(". ") + ".";

  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-border text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_color-mix(in_srgb,var(--color-primary)_55%,transparent)]" />
              {personalInfo.title}
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Crafting{" "}
              <span className="text-primary">digital</span> experiences with{" "}
              <span className="font-serif italic">precision</span>.
            </h1>

            <p className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground">
              {shortSummary}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button onClick={() => scrollTo("contact")}>
                Contact Me <FiArrowRight aria-hidden="true" />
              </Button>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  Download CV <FiDownload aria-hidden="true" />
                </Button>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-4 text-muted-foreground">
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
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[calc(var(--radius)+16px)] bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] blur-2xl animate-float" />
            <div className="glass-strong rounded-[var(--radius)] p-4 md:p-5 glow-border">
              <div className="flex items-start justify-between">
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">2023</span>{" "}
                  <span className="mx-1">—</span> Present
                  <div className="mt-1">Learning & building</div>
                </div>
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {personalInfo.availability}
                </span>
              </div>

              <div className="mt-4 relative aspect-[3/4] rounded-[calc(var(--radius)-4px)] overflow-hidden border border-border bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)]">
                <Image
                  src="/images/profile.svg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-xs text-muted-foreground">
          <div className="uppercase tracking-[0.25em]">Scroll</div>
          <div className="mt-2 h-6 w-px bg-border mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero