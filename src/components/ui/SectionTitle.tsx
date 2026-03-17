"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        <span className="glow-text">{title}</span>
      </h2>
      <div className="mt-3 h-px w-24 bg-[color-mix(in_srgb,var(--color-primary)_65%,transparent)] glow-border" />
      {subtitle ? (
        <p className="mt-4 text-muted-foreground max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}

