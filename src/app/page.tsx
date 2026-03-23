import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Lithira Jayanaka",
  description:
    "Discover the portfolio of Lithira Jayanaka, a Full-Stack Developer building performant, user-focused applications with MERN, Spring Boot, and React Native.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lithira Jayanaka | Full-Stack Developer Portfolio",
    description:
      "Discover projects, technical skills, and experience across full-stack web and mobile development.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}
