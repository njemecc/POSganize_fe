import { backendURL } from "./backend";
import { authHeader } from "./apiAuth";

export async function createNews(news) {
  const response = await fetch(`${backendURL}/api/v1/clubnews/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(news),
  });

  const data = await response.json();
  return data;
}

export async function getAllNews({ pageParam = 0 }) {
  const response = await fetch(
    `${backendURL}/api/v1/clubnews/pageable?pageNumber=${pageParam}`,
    {
      method: "GET",
      headers: authHeader(),
    }
  );
  const data = await response.json();
  return data;
}

export async function getNewsById(id) {
  const response = await fetch(`${backendURL}/api/v1/clubnews/get/${id}`, {
    method: "GET",
    headers: authHeader(),
  });

  const data = await response.json();

  return data;
}

export async function deleteNews(id) {
  const response = await fetch(`${backendURL}/api/v1/clubnews/delete/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  });

  const data = await response.json();

  return data;
}
