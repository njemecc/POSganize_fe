import { authHeader } from "./apiAuth";
import { backendURL } from "./backend";

export async function getAllTrainings() {
  const response = await fetch(`${backendURL}/api/v1/training/all`, {
    method: "GET",
    headers: authHeader(),
  });

  const data = await response.json();

  return data;
}

export async function deleteTraining(id) {
  const response = await fetch(`${backendURL}/api/v1/training/delete/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  });

  const data = await response.json();

  return data;
}

export async function createTraining(training) {
  const response = await fetch(`${backendURL}/api/v1/training/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(training),
  });

  const data = await response.json();
  return data;
}

export async function updateTraining({ trainingToSend, trainingId }) {
  const response = await fetch(
    `${backendURL}/api/v1/training/update/${trainingId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...authHeader() },
      body: JSON.stringify(trainingToSend),
    }
  );

  const data = await response.json();

  return data;
}

export async function getTraining(id) {
  const response = await fetch(`${backendURL}/api/v1/training/get/${id}`, {
    method: "GET",
    headers: authHeader(),
  });
  const data = await response.json();

  return data;
}
