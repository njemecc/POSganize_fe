import { backendURL } from "./backend";

export async function getMembershipByUserId({
  userId,
  sortBy,
  pageNumber,
  pageSize,
}) {
  const response = await fetch(
    `${backendURL}/api/v1/membership/user/${userId}?sortOrder=${sortBy}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  const data = await response.json();

  return data;
}

export async function createMembership(membership) {
  const response = await fetch(`${backendURL}/api/v1/membership/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(membership),
  });

  const data = await response.json();

  return data;
}
