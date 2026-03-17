import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/lib/constants";

const About = () => {
  return (
    <section id="about" className="mt-16 md:mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="About"
          subtitle="A quick snapshot of who I am and what I enjoy building."
        />

        <div className="grid md:grid-cols-[220px_1fr] gap-8 items-start">
          <div className="glass rounded-[var(--radius)] p-6 flex items-center justify-center">
            <div className="h-32 w-32 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] border border-border flex items-center justify-center">
              <span className="text-3xl font-semibold glow-text">
                {personalInfo.name
                  .split(" ")
                  .map((p) => p[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            </div>
          </div>

          <div className="glass-strong rounded-[var(--radius)] p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
              {personalInfo.profileSummary}
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-[var(--radius)] border border-border p-4 bg-[color-mix(in_srgb,var(--color-surface)_55%,transparent)]">
                <p className="text-muted-foreground">Location</p>
                <p className="mt-1 text-foreground">{personalInfo.location}</p>
              </div>
              <div className="rounded-[var(--radius)] border border-border p-4 bg-[color-mix(in_srgb,var(--color-surface)_55%,transparent)]">
                <p className="text-muted-foreground">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-1 block text-foreground hover:text-primary transition break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About