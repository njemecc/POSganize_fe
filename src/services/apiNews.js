import { backendURL } from "./backend";

export async function createNews(news) {
  console.log(news);
  const response = await fetch(`${backendURL}/api/v1/clubnews/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(news),
  });

  const data = await response.json();
  return data;
}

export async function getAllNews({ pageParam = 0 }) {
  console.log(pageParam);
  const response = await fetch(
    `${backendURL}/api/v1/clubnews/pageable?pageNumber=${pageParam}`
  );
  const data = await response.json();
  return data;
}
