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

          <div className="mt-auto flex items-center gap-3 pt-4">
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
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`Ver detalhes de ${project.title}`}
              className="inline-flex h-9 cursor-pointer items-center rounded-full border border-white/10 bg-white/5 px-3 text-sm text-white/70 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
            >
              detalhes →
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
            className="themed-scrollbar relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-white/10 bg-black p-5 pt-14 sm:p-7 sm:pt-14"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar detalhes do projeto"
              className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <FaTimes aria-hidden="true" />
            </button>

            <header className="mb-6 border-b border-white/10 pb-5">
              <span className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                {project.status}
              </span>
              <h2
                id={`project-title-${project.id}`}
                className="text-2xl font-bold leading-tight text-cyan-400 sm:text-3xl"
              >
                {project.title}
              </h2>
            </header>

            <div className="space-y-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Contexto", text: project.context },
                  { label: "Desafio", text: project.challenge },
                  { label: "Ação", text: project.action, wide: true },
                  { label: "Resultado", text: project.result, wide: true, highlight: true },
                ].map((item) => (
                  <section
                    key={item.label}
                    className={`rounded-lg border p-4 ${
                      item.wide ? "sm:col-span-2" : ""
                    } ${
                      item.highlight
                        ? "border-cyan-400/25 bg-cyan-400/5"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      {item.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/75">
                      {item.text}
                    </p>
                  </section>
                ))}
              </div>

              <section>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">
                  Tecnologias
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">
                  {project.contributionDesc}
                </h3>
                <ul className="list-disc space-y-2 pl-5 leading-relaxed text-white/70 marker:text-cyan-400">
                  {project.contribution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}
