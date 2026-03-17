import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/lib/constants";

export default function Skills() {
  const skillNames = skills.map((s) => s.name);
  const marqueeItems = [...skillNames, ...skillNames];

  return (
    <section id="skills" className="mt-16 md:mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Skills"
          subtitle="A focused toolkit for building scalable web and mobile products."
        />

        <div className="glass-strong rounded-[var(--radius)] p-6 md:p-8 overflow-hidden">
          <div className="relative">
            <div className="flex gap-3 whitespace-nowrap animate-marquee will-change-transform">
              {marqueeItems.map((name, idx) => (
                <span
                  key={`${name}-${idx}`}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm border border-border bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)]"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {skills.map((s) => (
              <div
                key={s.name}
                className="glass rounded-[var(--radius)] px-4 py-3 flex items-center justify-between"
              >
                <span className="text-sm text-foreground">{s.name}</span>
                <span className="text-xs text-muted-foreground">
                  {s.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

