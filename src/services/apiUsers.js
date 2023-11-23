import { backendURL } from "./backend";

export async function getAllUsers() {
  const response = await fetch(`${backendURL}/api/v1/users/all`);
  const data = await response.json();
  // console.log("all users", data);
  return data;
}

export async function deleteUser(id) {
  const response = await fetch(`${backendURL}/api/v1/users/delete/${id}`, {
    method: "Delete",
  });

  const data = await response.json();

  return data;
}

export async function createUser(user) {
  console.log(user);
  const response = await fetch(`${backendURL}/api/v1/auth/register`, {
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  return data;
}

export async function updateUser(userId, updatedUser) {
  const response = await fetch(`${backendURL}/api/v1/users/update/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUser),
  });

  const data = await response.json();

  return data;
}

export async function isUserActive(userId) {
  const response = await fetch(
    `${backendURL}/api/v1/membership/active/${userId}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }

  const data = await response.json();

  return data;
}
