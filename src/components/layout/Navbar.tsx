"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/constants";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollTo } = useScrollAnimation();

  const navItems: Array<{ id: string; label: string }> = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const handleNav = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="glass border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center">
          <button
            onClick={() => handleNav("home")}
            className="text-base md:text-lg font-semibold tracking-tight"
            aria-label="Go to top"
          >
            <span className="glow-text">LJ.</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 mx-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[var(--radius)] text-muted-foreground hover:text-foreground hover:bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] transition"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[var(--radius)] text-muted-foreground hover:text-foreground hover:bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <Button size="sm" onClick={() => handleNav("contact")}>
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-[var(--radius)] hover:bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] transition"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden glass border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group relative text-left px-3 py-2 rounded-[var(--radius)] text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-24" />
              </button>
            ))}
            <div className="mt-2 flex items-center gap-3 px-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;