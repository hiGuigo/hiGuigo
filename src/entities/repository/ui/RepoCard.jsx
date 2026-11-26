export default function RepoCard({ repo }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer" className="block h-full">
      <div
        className="
        flex h-full flex-col p-4 rounded-xl
        border border-white/10
        bg-white/5
        transition-all duration-300
        hover:border-cyan-400
        hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]
        hover:-translate-y-1
      "
      >
        <h3 className="text-white font-semibold">{repo.name}</h3>

        <p className="mt-2 flex-1 text-white/50 text-sm line-clamp-2">
          {repo.description || "Sem descrição"}
        </p>

        <div className="mt-3 text-xs text-cyan-300">{repo.language}</div>
      </div>
    </a>
  );
}
