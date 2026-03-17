"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/constants";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const total = testimonials.length;
  const current = testimonials[index]!;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="testimonials" className="mt-16 md:mt-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle
          title="Kind words from amazing people."
          subtitle="Testimonials are placeholders — replace them with real feedback anytime."
        />

        <div className="glass-strong rounded-[var(--radius)] p-6 md:p-10 glow-border">
          <div className="flex items-start justify-between gap-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] border border-border text-primary">
              <FaQuoteLeft aria-hidden="true" />
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={prev}
                className="h-10 w-10 inline-flex items-center justify-center rounded-[var(--radius)] border border-border text-muted-foreground hover:text-foreground hover:bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] transition"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft aria-hidden="true" />
              </button>
              <button
                onClick={next}
                className="h-10 w-10 inline-flex items-center justify-center rounded-[var(--radius)] border border-border text-muted-foreground hover:text-foreground hover:bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] transition"
                aria-label="Next testimonial"
              >
                <FiChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-6 min-h-[170px] md:min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                  “{current.quote}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] border border-border flex items-center justify-center text-sm font-semibold text-primary">
                    {current.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{current.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {current.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={[
                  "h-2 rounded-full transition",
                  i === index
                    ? "w-8 bg-primary shadow-[0_0_18px_color-mix(in_srgb,var(--color-primary)_55%,transparent)]"
                    : "w-2 bg-border hover:bg-[color-mix(in_srgb,var(--color-primary)_35%,transparent)]",
                ].join(" ")}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

