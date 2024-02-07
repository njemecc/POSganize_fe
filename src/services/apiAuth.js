import { backendURL } from "./backend";

export async function login({ email, password }) {
  const response = await fetch(`${backendURL}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.access_token) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
}

export async function isUserAuthenticated() {
  const response = await fetch(`${backendURL}/api/v1/auth/check-auth`, {
    method: "GET",
    headers: authHeader(),
  });

  const data = await response.json();

  return data;
}

export async function logout() {
  try {
    const response = await fetch(`${backendURL}/api/v1/auth/logout`, {
      method: "POST",
      headers: authHeader(),
    });
  } catch (error) {
    console.error(error);
  }
}

export function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.access_token) {
    return { Authorization: "Bearer " + user.access_token };
  } else {
    return null;
  }
}
