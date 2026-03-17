"use client";

import Image from "next/image";
import * as React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

type ProjectLinks = Partial<{
  frontend: string;
  backend: string;
  live: string;
  source: string;
}>;

export type CardProps = {
  title: string;
  description: string;
  tech: string[];
  links?: ProjectLinks;
  image?: string;
  className?: string;
};

function LinkButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-secondary-foreground hover:text-primary transition"
      aria-label={label}
      title={label}
    >
      {icon}
      <span className="underline decoration-transparent hover:decoration-current transition">
        {label}
      </span>
    </a>
  );
}

export default function Card({
  title,
  description,
  tech,
  links,
  image,
  className,
}: CardProps) {
  return (
    <article
      className={cn(
        "group glass-strong rounded-[var(--radius)] overflow-hidden glow-border animated-border transition",
        className,
      )}
    >
      <div className="relative h-44 md:h-48 bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)]">
        {image ? (
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 transition"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--color-background)_70%,transparent)] via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs border border-border bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)]"
            >
              {t}
            </span>
          ))}
        </div>

        {links ? (
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {links.live ? (
              <LinkButton
                href={links.live}
                label="Live"
                icon={<FiExternalLink aria-hidden="true" />}
              />
            ) : null}
            {links.source ? (
              <LinkButton
                href={links.source}
                label="Source"
                icon={<FaGithub aria-hidden="true" />}
              />
            ) : null}
            {links.frontend ? (
              <LinkButton
                href={links.frontend}
                label="Frontend"
                icon={<FaGithub aria-hidden="true" />}
              />
            ) : null}
            {links.backend ? (
              <LinkButton
                href={links.backend}
                label="Backend"
                icon={<FaGithub aria-hidden="true" />}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

