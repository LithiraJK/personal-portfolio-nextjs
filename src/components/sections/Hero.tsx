"use client";

import { personalInfo } from "@/lib/constants";
import Button from "@/components/ui/Button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const { scrollTo } = useScrollAnimation();
  const shortSummary =
    personalInfo.profileSummary.split(". ").slice(0, 2).join(". ") + ".";

  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_25%,transparent)] blur-3xl animate-float" />
        <div className="absolute top-32 -right-24 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--color-highlight)_18%,transparent)] blur-3xl animate-float animation-delay-300" />
        <div className="absolute bottom-[-120px] left-1/3 h-80 w-80 rounded-full bg-[color-mix(in_srgb,var(--color-secondary)_40%,transparent)] blur-3xl animate-float animation-delay-500" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="glass-strong rounded-[var(--radius)] p-7 md:p-10 glow-border">
          <p className="text-sm text-muted-foreground">Hi, I’m</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold tracking-tight">
            <span className="glow-text">{personalInfo.name}</span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-secondary-foreground font-medium">
            {personalInfo.title}
          </p>
          <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-muted-foreground">
            {shortSummary}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button onClick={() => scrollTo("contact")}>Contact Me</Button>
            <Button variant="outline" onClick={() => scrollTo("projects")}>
              View Work
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-4 text-muted-foreground">
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
      </div>
    </section>
  );
}

export default Hero