"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/lib/constants";
import { FaCode, FaBolt, FaUsers, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="mt-16 md:mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="About me" subtitle="A bit more about how I build." />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
            >
              Building the future,{" "}
              <span className="text-primary font-serif italic">one</span> component at a
              time.
            </motion.p>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="mt-5 text-sm md:text-base leading-relaxed text-muted-foreground"
            >
              {personalInfo.profileSummary}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="mt-7 glass rounded-[var(--radius)] p-6 border border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-muted-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products users love and
                developers enjoy maintaining."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0 } } }}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-[var(--radius)] p-6 group cursor-pointer"
            >
              <motion.div className="text-primary text-2xl" whileHover={{ scale: 1.1 }}>
                <FaCode aria-hidden="true" />
              </motion.div>
              <h3 className="mt-4 font-semibold">Clean Code</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Writing maintainable, scalable code that stands the test of time.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.08 } } }}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-[var(--radius)] p-6 group cursor-pointer"
            >
              <motion.div className="text-primary text-2xl" whileHover={{ scale: 1.1 }}>
                <FaBolt aria-hidden="true" />
              </motion.div>
              <h3 className="mt-4 font-semibold">Performance</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Optimizing for speed and delivering smooth user experiences.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.16 } } }}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-[var(--radius)] p-6 group cursor-pointer"
            >
              <motion.div className="text-primary text-2xl" whileHover={{ scale: 1.1 }}>
                <FaUsers aria-hidden="true" />
              </motion.div>
              <h3 className="mt-4 font-semibold">Collaboration</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Working closely with teams to bring ideas to life.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.24 } } }}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-[var(--radius)] p-6 group cursor-pointer"
            >
              <motion.div className="text-primary text-2xl" whileHover={{ scale: 1.1 }}>
                <FaLightbulb aria-hidden="true" />
              </motion.div>
              <h3 className="mt-4 font-semibold">Innovation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Staying aligned with modern tools and best practices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About