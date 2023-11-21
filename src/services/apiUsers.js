import { backendURL } from "./backend";

export async function getAllUsers() {
  const response = await fetch(`${backendURL}/api/v1/users/all`);
  const data = await response.json();

  console.log("all users", data);
  return data;
}
