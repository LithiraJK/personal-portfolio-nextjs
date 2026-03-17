"use client";

import * as React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapScrollReveal<T extends HTMLElement>(options?: {
  start?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  selector?: string;
}) {
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = options?.start ?? "top 80%";
    const y = options?.y ?? 18;
    const duration = options?.duration ?? 0.7;
    const selector = options?.selector;
    const stagger = options?.stagger ?? 0.08;

    const targets: gsap.TweenTarget = selector
      ? (el.querySelectorAll(selector) as unknown as gsap.TweenTarget)
      : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration,
          ease: "power2.out",
          stagger: selector ? stagger : undefined,
          scrollTrigger: {
            trigger: el,
            start,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [options?.duration, options?.selector, options?.start, options?.stagger, options?.y]);

  return ref;
}

