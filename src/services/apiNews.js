import { backendURL } from "./backend";

export async function createNews(news) {
  const response = await fetch(`${backendURL}/api/v1/clubnews/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(news),
  });

  const data = await response.json();
  return data;
}
