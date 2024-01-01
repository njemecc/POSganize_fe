import { authHeader } from "./apiAuth";
import { backendURL } from "./backend";

export async function deleteSchedule(id) {
  const response = await fetch(`${backendURL}/api/v1/schedule/delete/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  });

  const data = await response.json();

  return data;
}

export async function createScheduleByTrainingId(schedule) {
  const response = await fetch(
    `${backendURL}/api/v1/schedule/create/${schedule.trainingId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeader() },
      body: JSON.stringify(schedule.data),
    }
  );

  const data = await response.json();

  return data;
}
