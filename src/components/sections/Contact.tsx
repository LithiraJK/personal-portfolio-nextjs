import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/constants";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className="mt-16 md:mt-20 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Contact"
          subtitle="Let’s connect. I’m open to internship and junior software engineering opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-strong rounded-[var(--radius)] p-6 md:p-8">
            <h3 className="text-xl font-semibold">Reach me</h3>

            <div className="mt-6 space-y-4 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition"
              >
                <FaEnvelope className="mt-0.5" aria-hidden="true" />
                <span className="break-all">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition"
              >
                <FaPhoneAlt className="mt-0.5" aria-hidden="true" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <HiLocationMarker className="mt-0.5" aria-hidden="true" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] transition"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] transition"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="glass-strong rounded-[var(--radius)] p-6 md:p-8">
            <h3 className="text-xl font-semibold">Quick message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer email? Click below and your mail app will open.
            </p>

            <div className="mt-6">
              <a href={`mailto:${personalInfo.email}?subject=Portfolio%20Inquiry`}>
                <Button className="w-full sm:w-auto">Email Me</Button>
              </a>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="glass rounded-[var(--radius)] p-4">
                <p className="text-muted-foreground">Role</p>
                <p className="mt-1">Junior Software Engineer / Intern</p>
              </div>
              <div className="glass rounded-[var(--radius)] p-4">
                <p className="text-muted-foreground">Availability</p>
                <p className="mt-1">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact