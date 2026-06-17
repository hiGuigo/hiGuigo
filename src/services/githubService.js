const BASE_URL = "https://api.github.com";

export async function getUserRepos(username) {
  const res = await fetch(`${BASE_URL}/users/${username}/repos`);

  if (!res.ok) {
    const error = await res.text();

    console.error("GitHub API Error:", {
      status: res.status,
      body: error,
    });

    throw new Error(`Erro ${res.status}`);
  }

  return res.json();
}