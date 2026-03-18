import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/lib/constants";
import { FaCode, FaBolt, FaUsers, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="mt-16 md:mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="About me" subtitle="A bit more about how I build." />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Building the future,{" "}
              <span className="font-serif italic">one</span> component at a
              time.
            </p>

            <p className="mt-5 text-sm md:text-base leading-relaxed text-muted-foreground">
              {personalInfo.profileSummary}
            </p>

            <div className="mt-7 glass rounded-[var(--radius)] p-6 border border-border">
              <p className="text-sm text-muted-foreground">
                “My mission is to create digital experiences that are not just
                functional, but truly delightful — products users love and
                developers enjoy maintaining.”
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-strong rounded-[var(--radius)] p-6">
              <div className="text-primary">
                <FaCode aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold">Clean Code</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Writing maintainable, scalable code that stands the test of time.
              </p>
            </div>
            <div className="glass-strong rounded-[var(--radius)] p-6">
              <div className="text-primary">
                <FaBolt aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold">Performance</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Optimizing for speed and delivering smooth user experiences.
              </p>
            </div>
            <div className="glass-strong rounded-[var(--radius)] p-6">
              <div className="text-primary">
                <FaUsers aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold">Collaboration</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Working closely with teams to bring ideas to life.
              </p>
            </div>
            <div className="glass-strong rounded-[var(--radius)] p-6">
              <div className="text-primary">
                <FaLightbulb aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold">Innovation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Staying aligned with modern tools and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About