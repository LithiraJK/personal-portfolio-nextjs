import { personalInfo } from "@/lib/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>

        <div className="flex items-center gap-4">
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
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;