import { useState } from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className="
        group cursor-pointer
        bg-white/5 border border-white/10
        rounded-xl overflow-hidden
        flex flex-col h-full
        transition-all duration-300
        hover:-translate-y-1
        hover:border-cyan-400
        hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
      "
      >
        {/* IMAGEM (40%) */}
        <div className="aspect-video overflow-hidden bg-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="
            w-full h-full object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
          />
        </div>

        {/* INFO (60%) */}
        <div className="p-4 flex flex-col gap-2 flex-1">
          <h3 className="text-white font-semibold text-lg">{project.title}</h3>

          <p className="text-white/60 text-sm line-clamp-3">
            {project.description}
          </p>

          {/* FOOTER DO CARD */}
          <div className="mt-auto pt-4 flex flex-col gap-3">
            {/* LINKS */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="
                w-9 h-9 flex items-center justify-center
                rounded-full border border-white/10
                bg-white/5
                text-white/70
                transition-all duration-300
                hover:text-cyan-300
                hover:border-cyan-400
                hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]
                hover:scale-110
              "
              >
                <FaGithub size={18} />
              </a>

              <a
                href={project.demo}
                target="_blank"
                className="
                w-9 h-9 flex items-center justify-center
                rounded-full border border-white/10
                bg-white/5
                text-white/70
                transition-all duration-300
                hover:text-cyan-300
                hover:border-cyan-400
                hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]
                hover:scale-110
              "
              >
                <FaYoutube size={18} />
              </a>
            </div>

            {/* HINT */}
            <div className="text-sm text-white/40 flex items-center gap-1">
              Clique para ver detalhes →
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="
              max-w-3xl w-full
              bg-black border border-white/10
              rounded-xl p-6
              overflow-y-auto max-h-[70vh]
              no-scrollbar
            "
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl text-cyan-400 font-bold mb-4">
              {project.title}
            </h2>

            <p className="text-white/70 mb-4 text-xs font-bold">
              {project.status}
            </p>

            <p className="text-white/70 mb-4">
              <strong>Objetivo</strong>: {project.objective}
            </p>
            <p className="text-white/70 mb-4">
              <strong>Solução</strong>: {project.solution}
            </p>
            <p className="text-white/70 mb-4">
              <strong>Resultado</strong>: {project.result}
            </p>

            {/* TECNOLOGIAS */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 border border-white/10 rounded-full text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CONTRIBUIÇÃO */}
            <p className="text-white/70 mb-4">
              <strong>{project.contributionDesc}</strong>
            </p>
            <ul className="list-disc pl-5 text-white/60 text-sm space-y-1">
              {project.contribution.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            {/* INDICADOR DE SCROLL */}
            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
              <span className="text-white text-sm mb-1">scroll</span>
              <svg
                className="w-5 h-5 text-white/40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
