"use client";

import * as React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import FloatingSkills from "@/components/ui/FloatingSkills";
import ParticlesField from "@/components/effects/ParticlesField";
import { skills } from "@/lib/constants";
import useGsapScrollReveal from "@/hooks/useGsapScrollReveal";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiSpringboot,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiPostman,
  SiGithub,
  SiLinux,
  SiFirebase,
  SiHibernate,
} from "react-icons/si";
import {
  FaJava,
  FaWindows,
  FaTools,
  FaKey,
  FaUsers,
  FaProjectDiagram,
  FaMobileAlt,
} from "react-icons/fa";

type SkillCategory = "Frontend" | "Backend" | "Mobile" | "Database" | "Tools" | "Concepts" | "Soft";

const categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "Tools",
  "Concepts",
  "Soft",
];

const levelToPct: Record<string, number> = {
  Advanced: 90,
  Intermediate: 70,
  Beginner: 50,
};

function getCategory(name: string): SkillCategory {
  const n = name.toLowerCase();

  if (["react.js", "responsive web design"].some((k) => n.includes(k))) return "Frontend";
  if (
    [
      "spring boot",
      "express.js",
      "restful",
      "jwt",
      "oauth",
      "jakarta",
      "jsp",
      "api integration",
      "microservices",
      "mvc",
      "layered",
    ].some((k) => n.includes(k))
  )
    return "Backend";
  if (["react native"].some((k) => n.includes(k))) return "Mobile";
  if (["mongodb", "mysql", "database design"].some((k) => n.includes(k))) return "Database";
  if (["git", "github", "maven", "postman", "docker", "linux", "windows"].some((k) => n.includes(k)))
    return "Tools";
  if (["problem solving", "team leadership", "project management", "fast learner", "adaptability", "agile"].some((k) => n.includes(k)))
    return "Soft";

  return "Concepts";
}

function getIcon(name: string) {
  const n = name.toLowerCase();

  if (n === "java") return <FaJava aria-hidden="true" />;
  if (n === "javascript") return <SiJavascript aria-hidden="true" />;
  if (n === "typescript") return <SiTypescript aria-hidden="true" />;
  if (n === "python") return <SiPython aria-hidden="true" />;
  if (n.includes("spring boot")) return <SiSpringboot aria-hidden="true" />;
  if (n.includes("hibernate")) return <SiHibernate aria-hidden="true" />;
  if (n.includes("express")) return <SiExpress aria-hidden="true" />;
  if (n.includes("node")) return <SiNodedotjs aria-hidden="true" />;
  if (n.includes("react native")) return <FaMobileAlt aria-hidden="true" />;
  if (n.includes("react")) return <SiReact aria-hidden="true" />;
  if (n.includes("mongodb")) return <SiMongodb aria-hidden="true" />;
  if (n.includes("mysql")) return <SiMysql aria-hidden="true" />;
  if (n.includes("docker")) return <SiDocker aria-hidden="true" />;
  if (n.includes("postman")) return <SiPostman aria-hidden="true" />;
  if (n.includes("github") || n.includes("git")) return <SiGithub aria-hidden="true" />;
  if (n.includes("linux")) return <SiLinux aria-hidden="true" />;
  if (n.includes("firebase") || n.includes("firestore")) return <SiFirebase aria-hidden="true" />;
  if (n.includes("jwt") || n.includes("oauth")) return <FaKey aria-hidden="true" />;
  if (n.includes("microservices")) return <FaProjectDiagram aria-hidden="true" />;
  if (n.includes("team") || n.includes("leadership")) return <FaUsers aria-hidden="true" />;
  if (n.includes("windows")) return <FaWindows aria-hidden="true" />;

  return <FaTools aria-hidden="true" />;
}

export default function Skills() {
  const revealRef = useGsapScrollReveal<HTMLDivElement>({
    selector: "[data-reveal]",
    stagger: 0.06,
  });

  const [active, setActive] = React.useState<SkillCategory>("Backend");

  const enriched = React.useMemo(() => {
    return skills.map((s) => ({
      ...s,
      category: getCategory(s.name),
      pct: levelToPct[s.level] ?? 60,
    }));
  }, []);

  const shown = enriched.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative isolate overflow-hidden mt-16 md:mt-20">
      <ParticlesField
        className="pointer-events-none absolute inset-0 -z-10"
        particleClassName="pointer-events-none absolute rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.95)]"
      />
      <div ref={revealRef} className="mx-auto max-w-6xl px-4">
        <SectionTitle
          variant="modern"
          eyebrow="Tech Stack"
          title="Skills"
          accentPhrase="in action"
          subtitle="Interactive skill cards with quick filters."
          titleClassName="text-balance"
        />

        <FloatingSkills />

        <div
          data-reveal
          className="glass-strong rounded-(--radius) p-5 md:p-6 glow-border will-change-transform"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const selected = c === active;
              return (
                <motion.button
                  key={c}
                  onClick={() => setActive(c)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={[
                    "px-3 py-1.5 rounded-full text-sm border transition",
                    selected
                      ? "border-[color-mix(in_srgb,var(--color-primary)_55%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] text-foreground"
                      : "border-border bg-[color-mix(in_srgb,var(--color-surface)_55%,transparent)] text-muted-foreground hover:text-foreground hover:border-[color-mix(in_srgb,var(--color-primary)_35%,transparent)]",
                  ].join(" ")}
                  aria-pressed={selected}
                >
                  {c}
                </motion.button>
              );
            })}
          </div>

          <motion.div
            className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={active}
          >
            {shown.map((s, idx) => (
              <motion.div
                key={s.name}
                data-reveal
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                className="group transform-3d"
              >
                <div className="glass rounded-(--radius) p-5 border border-border glow-border animated-border transition will-change-transform">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-(--radius) border border-border bg-[color-mix(in_srgb,var(--color-surface)_65%,transparent)] flex items-center justify-center text-primary shadow-[0_0_25px_color-mix(in_srgb,var(--color-primary)_22%,transparent)]">
                        {getIcon(s.name)}
                      </div>
                      <div>
                        <p className="font-semibold leading-tight">{s.name}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {s.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {s.level}
                    </span>
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] border border-border overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-[color-mix(in_srgb,var(--color-primary)_70%,transparent)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-50px" }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

