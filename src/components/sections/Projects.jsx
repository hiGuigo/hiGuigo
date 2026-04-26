import Section from "../layout/Section";

import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">
          Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

      </div>
    </Section>
  );
}