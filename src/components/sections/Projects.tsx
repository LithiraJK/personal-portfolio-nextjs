"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Pagination from "@/components/ui/Pagination";
import { projects } from "@/lib/constants";

const PROJECTS_PER_PAGE = 4;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const paginatedProjects = projects.slice(
      startIndex,
      startIndex + PROJECTS_PER_PAGE
    );

    return { paginatedProjects, totalPages };
  }, [currentPage]);

  return (
    <section id="projects" className="mt-16 md:mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          variant="modern"
          eyebrow="Selected Work"
          title="Featured"
          accentPhrase="projects"
          subtitle="A few builds showcasing full-stack development, payments, and real-time features."
          titleClassName="text-balance"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          key={`projects-page-${currentPage}`}
        >
          {paginationData.paginatedProjects.map((p, idx) => (
            <AnimatedCard
              key={p.title}
              index={idx}
              title={p.title}
              description={p.description}
              tech={p.tech}
              links={p.links}
              image={p.image}
            />
          ))}
        </motion.div>

        {paginationData.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={paginationData.totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;