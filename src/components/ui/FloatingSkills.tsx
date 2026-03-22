"use client";

import React from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiMongodb,
  SiSpringboot,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiJsonwebtokens,
  SiVercel,
  SiPostman,
  SiEclipseide,
  SiJavascript,
} from "react-icons/si";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaReact,
  FaNodeJs,
  FaKey,
} from "react-icons/fa";

interface FloatingSkill {
  name: string;
  icon: React.ReactNode;
  diameterDesktop: number;
  diameterMobile: number;
  initial: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
}

interface Bounds {
  x: number;
  y: number;
}

function createBubbleDiameterDesktop(index: number) {
  const tiers = [96, 110, 124, 138];
  return tiers[(index * 3 + 1) % tiers.length];
}

interface BaseFloatingSkill {
  name: string;
  icon: React.ReactNode;
}

function createInitialPosition(index: number, total: number) {
  const columns = 6;
  const rows = Math.ceil(total / columns);
  const col = index % columns;
  const row = Math.floor(index / columns);

  return {
    x: (col - (columns - 1) / 2) * 58 + ((index % 2) * 8 - 4),
    y: (row - (rows - 1) / 2) * 52 + ((index % 3) - 1) * 7,
  };
}

function createVelocity(index: number) {
  const angle = ((index * 47 + 19) % 360) * (Math.PI / 180);
  const speed = 20 + (index % 7) * 1.9;

  return {
    x: Math.cos(angle) * speed,
    y: Math.sin(angle) * speed,
  };
}

const baseFloatingSkills: BaseFloatingSkill[] = [
  {
    name: "Java",
    icon: <FaJava aria-hidden="true" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript aria-hidden="true" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript aria-hidden="true" />,
  },
  {
    name: "Python",
    icon: <FaPython aria-hidden="true" />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot aria-hidden="true" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs aria-hidden="true" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress aria-hidden="true" />,
  },
  {
    name: "Jakarta EE",
    icon: <SiEclipseide aria-hidden="true" />,
  },
  {
    name: "React",
    icon: <FaReact aria-hidden="true" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs aria-hidden="true" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 aria-hidden="true" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt aria-hidden="true" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss aria-hidden="true" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb aria-hidden="true" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql aria-hidden="true" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase aria-hidden="true" />,
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens aria-hidden="true" />,
  },
  {
    name: "OAuth",
    icon: <FaKey aria-hidden="true" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt aria-hidden="true" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    name: "Docker",
    icon: <FaDocker aria-hidden="true" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel aria-hidden="true" />,
  },
  {
    name: "Postman",
    icon: <SiPostman aria-hidden="true" />,
  },
  {
    name: "React Native",
    icon: <SiReact aria-hidden="true" />,
  },
];

const floatingSkills: FloatingSkill[] = baseFloatingSkills.map((skill, index, all) => ({
  ...skill,
  diameterDesktop: createBubbleDiameterDesktop(index),
  diameterMobile: Math.round(createBubbleDiameterDesktop(index) * 0.72),
  initial: createInitialPosition(index, all.length),
  velocity: createVelocity(index),
}));

const FloatingSkillBubble = ({
  skill,
  bounds,
  isActive,
}: {
  skill: FloatingSkill;
  bounds: Bounds;
  isActive: boolean;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(skill.initial.x);
  const y = useMotionValue(skill.initial.y);
  const velocityRef = React.useRef({ ...skill.velocity });
  const frameRef = React.useRef<number | null>(null);
  const lastTimeRef = React.useRef<number | null>(null);
  const diameter = bounds.x >= 384 ? skill.diameterDesktop : skill.diameterMobile;
  const bubbleRadius = diameter / 2;

  React.useEffect(() => {
    velocityRef.current = { ...skill.velocity };
    x.set(skill.initial.x);
    y.set(skill.initial.y);
  }, [skill.initial.x, skill.initial.y, skill.velocity, x, y]);

  React.useEffect(() => {
    if (isHovered || shouldReduceMotion || !isActive) {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = null;
      lastTimeRef.current = null;
      return;
    }

    const tick = (time: number) => {
      const prevTime = lastTimeRef.current;
      lastTimeRef.current = time;

      if (prevTime === null) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }

      const dt = Math.min((time - prevTime) / 1000, 0.032);
      const maxX = Math.max(bounds.x - bubbleRadius, 0);
      const maxY = Math.max(bounds.y - bubbleRadius, 0);
      const velocity = velocityRef.current;

      let nextX = x.get() + velocity.x * dt;
      let nextY = y.get() + velocity.y * dt;

      if (nextX > maxX) {
        nextX = maxX;
        velocity.x *= -1;
      } else if (nextX < -maxX) {
        nextX = -maxX;
        velocity.x *= -1;
      }

      if (nextY > maxY) {
        nextY = maxY;
        velocity.y *= -1;
      } else if (nextY < -maxY) {
        nextY = -maxY;
        velocity.y *= -1;
      }

      x.set(nextX);
      y.set(nextY);
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = null;
      lastTimeRef.current = null;
    };
  }, [bounds.x, bounds.y, bubbleRadius, isActive, isHovered, shouldReduceMotion, x, y]);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ x, y }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        style={{
          width: `${diameter}px`,
          height: `${diameter}px`,
          fontSize: `${Math.round(diameter * 0.33)}px`,
        }}
        className={`
          rounded-full
          flex items-center justify-center
          glass-strong border-2 border-primary/40
          backdrop-blur-md
          text-primary
          transition-all duration-300
          ${
            isHovered
              ? "shadow-[0_0_50px_rgba(var(--color-primary-rgb),0.6),0_0_100px_rgba(var(--color-primary-rgb),0.3)] scale-115"
              : "shadow-[0_0_25px_rgba(var(--color-primary-rgb),0.3),0_0_60px_rgba(var(--color-primary-rgb),0.1)]"
          }
        `}
      >
        {/* Animated background glow on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full bg-linear-to-r from-primary/30 via-primary/20 to-transparent"
            animate={{
              boxShadow: [
                "0 0 30px rgba(var(--color-primary-rgb), 0.5)",
                "0 0 60px rgba(var(--color-primary-rgb), 0.3)",
                "0 0 30px rgba(var(--color-primary-rgb), 0.5)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Icon */}
        <div className="relative z-10">{skill.icon}</div>
      </motion.div>

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: -35 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap mt-2 text-xs md:text-sm font-semibold text-foreground bg-[color-mix(in_srgb,var(--color-background)_95%,transparent)] px-3 py-1.5 rounded-full border border-border shadow-lg z-20"
        >
          {skill.name}
        </motion.div>
      )}
    </motion.div>
  );
};

export default function FloatingSkills() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [bounds, setBounds] = React.useState<Bounds>({ x: 300, y: 190 });
  const [isMobile, setIsMobile] = React.useState(false);
  const [isActive, setIsActive] = React.useState(true);
  const shouldReduceMotion = useReducedMotion();

  const visibleSkills = React.useMemo(() => {
    if (isMobile) {
      return floatingSkills.filter((_, idx) => idx % 2 === 0).slice(0, 12);
    }

    return floatingSkills;
  }, [isMobile]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsMobile(mediaQuery.matches);
    sync();

    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  React.useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") {
      return;
    }

    const element = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const element = containerRef.current;

    const updateBounds = () => {
      const rect = element.getBoundingClientRect();
      setBounds({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    };

    updateBounds();

    const observer = new ResizeObserver(() => {
      updateBounds();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      className="relative h-96 md:h-125 w-full mb-12 rounded-xl border border-primary/20 bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(var(--color-primary-rgb),.05)_25%,rgba(var(--color-primary-rgb),.05)_26%,transparent_27%,transparent_74%,rgba(var(--color-primary-rgb),.05)_75%,rgba(var(--color-primary-rgb),.05)_76%,transparent_77%,transparent)] bg-size-[40px_40px] opacity-40" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[color-mix(in_srgb,var(--color-background)_0%,transparent)]" />

      {/* Floating skills container */}
      <div ref={containerRef} className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {visibleSkills.map((skill) => (
            <FloatingSkillBubble
              key={skill.name}
              skill={skill}
              bounds={bounds}
              isActive={isActive}
            />
          ))}
        </div>
      </div>

      {/* Center highlight */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/30"
        animate={
          isActive && !shouldReduceMotion
            ? {
                boxShadow: [
                  "0 0 0px rgba(var(--color-primary-rgb), 0.3)",
                  "0 0 40px rgba(var(--color-primary-rgb), 0.1)",
                  "0 0 0px rgba(var(--color-primary-rgb), 0.3)",
                ],
              }
            : { boxShadow: "0 0 0px rgba(var(--color-primary-rgb), 0.2)" }
        }
        transition={
          isActive && !shouldReduceMotion
            ? {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : { duration: 0 }
        }
      />
    </motion.div>
  );
}
