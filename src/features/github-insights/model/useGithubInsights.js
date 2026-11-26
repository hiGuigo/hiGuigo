import { useEffect, useState } from "react";
import { getRepoLanguages, getUserRepos } from "../api/githubService";

const REPOSITORY_LIMIT = 6;

export function useGithubInsights(username) {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function load() {
      setLoading(true);
      setError(false);

      try {
        const data = await getUserRepos(username);
        const latestRepos = data
          .toSorted((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, REPOSITORY_LIMIT);

        const reposWithLanguages = await Promise.all(
          latestRepos.map(async (repo) => {
            try {
              const languageBytes = await getRepoLanguages(repo.languages_url);
              return { ...repo, languages: Object.keys(languageBytes) };
            } catch {
              return {
                ...repo,
                languages: repo.language ? [repo.language] : [],
              };
            }
          }),
        );

        const languageCounts = new Map();
        reposWithLanguages.forEach((repo) => {
          new Set(repo.languages).forEach((language) => {
            languageCounts.set(language, (languageCounts.get(language) || 0) + 1);
          });
        });

        const languageList = [...languageCounts]
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

        if (active) {
          setRepos(reposWithLanguages);
          setLanguages(languageList);
        }
      } catch (loadError) {
        console.error(loadError);
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [username]);

  return { repos, languages, loading, error };
}
