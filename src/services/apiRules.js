import { backendURL } from "./backend";
import { authHeader } from "./apiAuth";

export async function getAllRules() {
  const response = await fetch(`${backendURL}/api/v1/clubrules/all`, {
    method: "GET",
    headers: authHeader(),
  });

  const data = await response.json();

  return data;
}

export async function createRule(rule) {
  const response = await fetch(`${backendURL}/api/v1/clubrules/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(rule),
  });

  const data = await response.json();
  return data;
}

export async function deleteRule(id) {
  const response = await fetch(`${backendURL}/api/v1/clubrules/delete/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  });

  const data = await response.json();

  return data;
}
