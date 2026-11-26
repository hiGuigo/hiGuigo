const BASE_URL = "https://api.github.com";

async function getJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

export function getUserRepos(username) {
  const params = new URLSearchParams({ per_page: "6", sort: "updated" });
  return getJson(`${BASE_URL}/users/${username}/repos?${params}`);
}

export function getRepoLanguages(languagesUrl) {
  return getJson(languagesUrl);
}
