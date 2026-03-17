"use client";

import * as React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { education, leadership } from "@/lib/constants";

type TimelineEntry = {
  period: string;
  title: string;
  org?: string;
  description?: string;
};

export default function Experience() {
  const [activeTab, setActiveTab] = React.useState<"education" | "experience">(
    "education",
  );

  const educationEntries: TimelineEntry[] = education.map((e) => ({
    period: e.period,
    title: e.degree,
    org: e.institution,
  }));

  const experienceEntries: TimelineEntry[] = leadership.map((l) => ({
    period: "Experience",
    title: l.role,
    description: l.description,
  }));

  const entries = activeTab === "education" ? educationEntries : experienceEntries;

  return (
    <section id="experience" className="mt-16 md:mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Experience that speaks volumes."
          subtitle="Switch between Education and Experience to explore the roadmap."
        />

        <div className="mt-6 flex items-center justify-center">
          <div
            role="tablist"
            aria-label="Experience tabs"
            className="glass rounded-full border border-border p-1 inline-flex gap-1"
          >
            <button
              role="tab"
              aria-selected={activeTab === "education"}
              className={[
                "px-4 py-2 rounded-full text-sm transition",
                activeTab === "education"
                  ? "bg-[color-mix(in_srgb,var(--color-primary)_22%,transparent)] text-foreground glow-border"
                  : "text-muted-foreground hover:text-foreground hover:bg-[color-mix(in_srgb,var(--color-surface)_55%,transparent)]",
              ].join(" ")}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "experience"}
              className={[
                "px-4 py-2 rounded-full text-sm transition",
                activeTab === "experience"
                  ? "bg-[color-mix(in_srgb,var(--color-primary)_22%,transparent)] text-foreground glow-border"
                  : "text-muted-foreground hover:text-foreground hover:bg-[color-mix(in_srgb,var(--color-surface)_55%,transparent)]",
              ].join(" ")}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {entries.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={`${item.title}-${idx}`}
                  className="relative md:grid md:grid-cols-2 md:gap-10 items-center"
                >
                  <div
                    className={[
                      "md:col-span-1",
                      isLeft ? "md:pr-10" : "md:col-start-2 md:pl-10",
                    ].join(" ")}
                  >
                    <div className="glass-strong rounded-[var(--radius)] p-6 md:p-7 glow-border">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs text-primary font-medium">
                            {item.period}
                          </p>
                          <h3 className="mt-1 text-lg md:text-xl font-semibold">
                            {item.title}
                          </h3>
                          {item.org ? (
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.org}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      {item.description ? (
                        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_28px_color-mix(in_srgb,var(--color-primary)_55%,transparent)]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

