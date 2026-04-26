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
            {project.objective}
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
              overflow-y-auto max-h-[90vh]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl text-cyan-400 font-bold mb-4">
              {project.title}
            </h2>

            <p className="text-white/70 mb-4">{project.problem}</p>
            <p className="text-white/70 mb-4">{project.solution}</p>
            <p className="text-white/70 mb-4">{project.result}</p>

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
            <ul className="list-disc pl-5 text-white/60 text-sm space-y-1">
              {project.contribution.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
