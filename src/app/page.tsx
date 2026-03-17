import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Timeline from "@/components/sections/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </>
  );
}