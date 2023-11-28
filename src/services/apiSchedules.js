import { backendURL } from "./backend";

export async function deleteSchedule(id) {
  const response = await fetch(`${backendURL}/api/v1/schedule/delete/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  return data;
}
