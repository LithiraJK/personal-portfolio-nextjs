import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { education, leadership } from "@/lib/constants";

const Timeline = () => {
  return (
    <section id="experience" className="mt-16 md:mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Experience"
          subtitle="Education and leadership highlights."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-strong rounded-[var(--radius)] p-6 md:p-8">
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="mt-6">
              {education.map((e) => (
                <TimelineItem
                  key={`${e.institution}-${e.period}`}
                  title={e.institution}
                  subtitle={e.degree}
                  period={e.period}
                />
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-[var(--radius)] p-6 md:p-8">
            <h3 className="text-xl font-semibold">Leadership</h3>
            <div className="mt-6">
              {leadership.map((l) => (
                <TimelineItem
                  key={l.role}
                  title={l.role}
                  description={l.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline