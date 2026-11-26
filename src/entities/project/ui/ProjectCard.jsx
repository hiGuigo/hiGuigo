import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaGithub, FaYoutube, FaTimes } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <article
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
      >
        <div className="aspect-video overflow-hidden bg-white/10">
          <img
            src={project.image}
            alt={`Imagem do projeto ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="line-clamp-3 text-sm text-white/60">
            {project.description}
          </p>

          <div className="mt-auto flex flex-col gap-3 pt-4">
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir repositório GitHub de ${project.title}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]"
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>

              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Assistir demonstração de ${project.title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                >
                  <FaYoutube size={18} aria-hidden="true" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="self-start text-left text-sm text-white/50 transition-colors hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              Ver detalhes do projeto <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </article>

      {open && createPortal(
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-title-${project.id}`}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-white/10 bg-black p-5 pt-14 sm:p-6 sm:pt-14"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar detalhes do projeto"
              className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <FaTimes aria-hidden="true" />
            </button>

            <h2
              id={`project-title-${project.id}`}
              className="mb-4 text-2xl font-bold text-cyan-400"
            >
              {project.title}
            </h2>
            <p className="mb-4 text-xs font-bold text-white/70">{project.status}</p>
            <p className="mb-4 text-white/70">
              <strong>Objetivo:</strong> {project.objective}
            </p>
            <p className="mb-4 text-white/70">
              <strong>Solução:</strong> {project.solution}
            </p>
            <p className="mb-4 text-white/70">
              <strong>Resultado:</strong> {project.result}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 px-2 py-1 text-xs text-white/60"
                >
                  {technology}
                </span>
              ))}
            </div>

            <p className="mb-3 font-semibold text-white/70">
              {project.contributionDesc}
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-white/60">
              {project.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}
