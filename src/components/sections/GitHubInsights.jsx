import Section from "../layout/Section";
import { useGithubInsights } from "../../hooks/useGithubInsights";
import RepoCard from "../ui/RepoCard";
import LanguageBadge from "../ui/LanguageBadge";

export default function GitHubInsights() {
  const { repos, languages, loading } =
    useGithubInsights("hiGuigo");

  return (
    <Section id="repositories">

      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
        Repositórios Recentes
      </h2>

      {loading ? (
        <p className="text-white/40">Carregando dados...</p>
      ) : (
        <>
          {/* LANGUAGES */}
          <div className="flex flex-wrap gap-3 mb-10">
            {languages.map((lang) => (
              <LanguageBadge key={lang.name} lang={lang} />
            ))}
          </div>

          {/* REPOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </>
      )}

    </Section>
  );
}