"use client";

import * as React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ParticlesField from "@/components/effects/ParticlesField";
import { personalInfo } from "@/lib/constants";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitMessage({
        type: "error",
        text: "Please fill in name, email, and message.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          company,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitMessage({
          type: "error",
          text: data.error ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setSubmitMessage({
        type: "success",
        text: "Message sent successfully. I will get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setCompany("");
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Network error. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden mt-16 md:mt-20 pb-16">
      <ParticlesField
        className="pointer-events-none absolute inset-0 -z-10"
        particleClassName="pointer-events-none absolute rounded-full bg-cyan-200/90 shadow-[0_0_12px_rgba(103,232,249,0.95)]"
      />
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          variant="modern"
          eyebrow="Get In Touch"
          title="Let's build"
          accentPhrase="something great."
          subtitle="Have a project in mind? Send a message and let’s discuss how we can work together."
          className="mx-auto max-w-5xl text-center"
          titleClassName="text-balance"
          subtitleClassName="mx-auto"
          dividerClassName="mx-auto"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-strong rounded-(--radius) p-6 md:p-8 glow-border">
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="text"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="hidden"
              />

              <div>
                <label className="text-xs text-muted-foreground">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name..."
                  required
                  className="mt-2 w-full rounded-(--radius) bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] border border-border px-4 py-3 text-sm outline-none focus:border-[color-mix(in_srgb,var(--color-primary)_70%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_18%,transparent)]"
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  type="email"
                  required
                  className="mt-2 w-full rounded-(--radius) bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] border border-border px-4 py-3 text-sm outline-none focus:border-[color-mix(in_srgb,var(--color-primary)_70%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_18%,transparent)]"
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="mt-2 w-full resize-none rounded-(--radius) bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] border border-border px-4 py-3 text-sm outline-none focus:border-[color-mix(in_srgb,var(--color-primary)_70%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_18%,transparent)]"
                />
              </div>

              {submitMessage ? (
                <p
                  role="status"
                  className={
                    submitMessage.type === "success"
                      ? "text-sm text-emerald-400"
                      : "text-sm text-red-400"
                  }
                >
                  {submitMessage.text}
                </p>
              ) : null}

              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"} <FiSend aria-hidden="true" />
              </Button>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="glass-strong rounded-(--radius) p-6 md:p-8 glow-border">
              <h3 className="text-lg font-semibold">Contact Information</h3>

              <div className="mt-6 space-y-4 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition"
                >
                  <span className="h-10 w-10 rounded-(--radius) glass inline-flex items-center justify-center text-primary border border-border">
                    <FaEnvelope aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="mt-1 break-all">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition"
                >
                  <span className="h-10 w-10 rounded-(--radius) glass inline-flex items-center justify-center text-primary border border-border">
                    <FaPhoneAlt aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="mt-1">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-muted-foreground">
                  <span className="h-10 w-10 rounded-(--radius) glass inline-flex items-center justify-center text-primary border border-border">
                    <HiLocationMarker aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="mt-1">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-(--radius) p-6 md:p-8 glow-border">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_color-mix(in_srgb,var(--color-primary)_55%,transparent)]" />
                <h3 className="text-lg font-semibold">Currently Available</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                I’m currently open to internship and junior software engineering
                opportunities, plus exciting freelance projects. Let’s talk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact