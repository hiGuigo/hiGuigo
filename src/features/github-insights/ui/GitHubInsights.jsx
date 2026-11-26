import Section from "../../../shared/ui/Section";
import { useGithubInsights } from "../model/useGithubInsights";
import RepoCard from "../../../entities/repository/ui/RepoCard";
import LanguageBadge from "../../../entities/repository/ui/LanguageBadge";

export default function GitHubInsights() {
  const { repos, languages, loading, error } =
    useGithubInsights("hiGuigo");

  return (
    <Section id="repositories">

      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
        Repositórios Recentes
      </h2>

      {loading ? (
        <p className="text-white/40" role="status">Carregando dados...</p>
      ) : error ? (
        <p className="text-white/60" role="status">
          Não foi possível carregar os repositórios agora.
        </p>
      ) : repos.length === 0 ? (
        <p className="text-white/60">Nenhum repositório encontrado.</p>
      ) : (
        <>
          {/* LANGUAGES */}
          <div className="flex flex-wrap gap-3 mb-10">
            {languages.map((lang) => (
              <LanguageBadge key={lang.name} lang={lang} />
            ))}
          </div>

          {/* REPOS */}
          <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </>
      )}

    </Section>
  );
}