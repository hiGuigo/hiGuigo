export default function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="block h-full"
      aria-label={`Abrir repositório ${repo.name} no GitHub`}
    >
      <article className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
        <h3 className="font-semibold text-white">{repo.name}</h3>

        <p className="mt-2 line-clamp-2 flex-1 text-sm text-white/50">
          {repo.description || "Sem descrição"}
        </p>

        <div className="mt-4 flex flex-wrap gap-2" aria-label="Linguagens do repositório">
          {repo.languages?.length > 0 ? (
            (repo.languages ?? []).map((language) => (
              <span
                key={language}
                className="rounded-full border border-white/10 px-2 py-1 text-xs text-cyan-300"
              >
                {language}
              </span>
            ))
          ) : (
            <span className="text-xs text-white/40">Sem linguagem detectada</span>
          )}
        </div>
      </article>
    </a>
  );
}
