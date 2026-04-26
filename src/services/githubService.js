const BASE_URL = "https://api.github.com";

export async function getUserRepos(username) {
  const res = await fetch(`${BASE_URL}/users/${username}/repos`);

  if (!res.ok) throw new Error("Erro ao buscar repos");

  return res.json();
}