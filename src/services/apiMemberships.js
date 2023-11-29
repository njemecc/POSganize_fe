import { backendURL } from "./backend";

export async function getMembershipByUserId(id) {
  const response = await fetch(`${backendURL}/api/v1/membership/user/${id}`);
  const data = await response.json();

  return data;
}
