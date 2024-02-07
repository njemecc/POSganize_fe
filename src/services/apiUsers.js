import { backendURL } from "./backend";
import { authHeader } from "./apiAuth";
import { toast } from "react-hot-toast";
export async function getAllUsers({ pageNumber, pageSize, status }) {
  const response = await fetch(
    `${backendURL}/api/v1/users/all?pageNumber=${pageNumber}&pageSize=${pageSize}&status=${status}`,
    {
      method: "GET",
      headers: authHeader(),
    }
  );
  const data = await response.json();
  return data;
}

export async function getUserById(id) {
  const response = await fetch(`${backendURL}/api/v1/users/get/${id}`, {
    method: "GET",
    headers: authHeader(),
  });

  const data = await response.json();

  return data;
}

export async function deleteUser(id) {
  const response = await fetch(`${backendURL}/api/v1/users/delete/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  });

  const data = await response.json();

  return data;
}

export async function createUser(user) {
  const response = await fetch(`${backendURL}/api/v1/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    toast.error("An error occurred while creating a new user");
    return null;
  }

  const data = await response.json();

  return data;
}

export async function updateUser(updatedUser) {
  const response = await fetch(
    `${backendURL}/api/v1/users/update/${updatedUser.userId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...authHeader() },
      body: JSON.stringify(updatedUser.data),
    }
  );

  const data = await response.json();

  return data;
}

export async function isUserActive(userId) {
  const response = await fetch(
    `${backendURL}/api/v1/membership/active/${userId}`,
    {
      method: "GET",
      headers: authHeader(),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }

  const data = await response.json();

  return data;
}
