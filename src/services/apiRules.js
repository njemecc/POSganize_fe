import { backendURL } from "./backend";

export async function getAllRules() {
  const response = await fetch(`${backendURL}/api/v1/clubrules/all`);

  const data = await response.json();

  return data;
}