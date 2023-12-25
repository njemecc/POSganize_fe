import { backendURL } from "./backend";

export async function getAllRules() {
  const response = await fetch(`${backendURL}/api/v1/clubrules/all`);

  const data = await response.json();

  return data;
}

export async function createRule(rule) {
 
  const response = await fetch(`${backendURL}/api/v1/clubrules/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rule),
  });

  const data = await response.json();
  return data;
}