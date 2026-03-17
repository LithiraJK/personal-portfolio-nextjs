"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TimelineItemProps = {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  className?: string;
};

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  className,
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        "relative pl-8 pb-8 border-l border-border last:pb-0",
        className,
      )}
    >
      <div className="absolute left-[-9px] top-1.5 h-4 w-4 rounded-full bg-primary shadow-[0_0_25px_color-mix(in_srgb,var(--color-primary)_45%,transparent)]" />
      <div className="glass rounded-[var(--radius)] p-5">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {subtitle ? (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            ) : null}
          </div>
          {period ? (
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              {period}
            </p>
          ) : null}
        </div>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

