import { backendURL } from "./backend";

export async function getStatisticsByDate({ fromDate, toDate }) {
  const response = await fetch(
    `${backendURL}/api/v1/membership/revenue-and-members?fromDate=${fromDate}&toDate=${toDate}`
  );
  const data = await response.json();

  return data;
}

export async function getMembersPerTraining() {
  const response = await fetch(
    `${backendURL}/api/v1/training/users-per-training`
  );
  const data = await response.json();

  return data;
}
