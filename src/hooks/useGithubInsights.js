import { useEffect, useState } from "react";
import { getUserRepos } from "../services/githubService";

export function useGithubInsights(username) {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const cacheKey = `gh_insights_${username}`;
        const cached = localStorage.getItem(cacheKey);

        if (cached) {
          const data = JSON.parse(cached);
          setRepos(data.repos);
          setLanguages(data.languages);
          setLoading(false);
          return;
        }

        const data = await getUserRepos(username);

        const sorted = data
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);

        const langMap = {};

        data.forEach((repo) => {
          if (!repo.language) return;

          langMap[repo.language] = (langMap[repo.language] || 0) + 1;
        });

        const langArray = Object.entries(langMap)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count);

        setRepos(sorted);
        setLanguages(langArray);

        localStorage.setItem(
          cacheKey,
          JSON.stringify({ repos: sorted, languages: langArray }),
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [username]);

  return { repos, languages, loading };
}
