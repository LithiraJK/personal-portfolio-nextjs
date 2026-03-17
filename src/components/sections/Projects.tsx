import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { projects } from "@/lib/constants";

const Projects = () => {
  return (
    <section id="projects" className="mt-16 md:mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Projects"
          subtitle="A few builds showcasing full-stack development, payments, and real-time features."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card
              key={p.title}
              title={p.title}
              description={p.description}
              tech={p.tech}
              links={p.links}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects