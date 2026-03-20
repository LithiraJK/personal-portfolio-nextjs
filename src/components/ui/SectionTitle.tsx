"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type SectionTitleProps = {
  title: string;
  subtitle?: string;
  variant?: "default" | "modern";
  eyebrow?: string;
  accentPhrase?: string;
  accentPlacement?: "prefix" | "suffix";
  titleClassName?: string;
  subtitleClassName?: string;
  dividerClassName?: string;
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  variant = "default",
  eyebrow,
  accentPhrase,
  accentPlacement = "suffix",
  titleClassName,
  subtitleClassName,
  dividerClassName,
  className,
}: SectionTitleProps) {
  const isModern = variant === "modern";

  const accent = accentPhrase ? (
    <span className="font-serif italic text-[color-mix(in_srgb,var(--color-primary)_95%,white)] glow-text">
      {accentPhrase}
    </span>
  ) : null;

  return (
    <div className={cn(isModern ? "mb-10" : "mb-8", className)}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--color-primary)_80%,white)]">
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          isModern
            ? "text-4xl leading-tight md:text-6xl md:leading-[1.05] font-semibold tracking-tight"
            : "text-3xl md:text-4xl font-semibold tracking-tight",
          titleClassName,
        )}
      >
        <span className="glow-text">{title}</span>
        {accent && accentPlacement === "prefix" ? <>{" "}{accent}</> : null}
        {accent && accentPlacement === "suffix" ? <>{" "}{accent}</> : null}
      </h2>

      <div
        className={cn(
          isModern
            ? "mt-5 h-px w-32 bg-gradient-to-r from-[color-mix(in_srgb,var(--color-primary)_85%,white)] to-transparent"
            : "mt-3 h-px w-24 bg-[color-mix(in_srgb,var(--color-primary)_65%,transparent)] glow-border",
          dividerClassName,
        )}
      />

      {subtitle ? (
        <p
          className={cn(
            isModern
              ? "mt-5 max-w-3xl text-base leading-relaxed text-[color-mix(in_srgb,var(--color-muted-foreground)_75%,white)] md:text-xl"
              : "mt-4 max-w-2xl text-muted-foreground",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

