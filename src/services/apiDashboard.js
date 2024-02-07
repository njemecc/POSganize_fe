import { backendURL } from "./backend";
import { authHeader } from "./apiAuth";

export async function getStatisticsByDate({ fromDate, toDate }) {
  const response = await fetch(
    `${backendURL}/api/v1/membership/revenue-and-members?fromDate=${fromDate}&toDate=${toDate}`,
    {
      method: "GET",
      headers: authHeader(),
    }
  );
  const data = await response.json();

  return data;
}

export async function getMembersPerTraining({ fromDate, toDate }) {
  const response = await fetch(
    `${backendURL}/api/v1/training/users-per-training?fromDate=${fromDate}&toDate=${toDate}`,
    {
      method: "GET",
      headers: authHeader(),
    }
  );
  const data = await response.json();

  return data;
}
