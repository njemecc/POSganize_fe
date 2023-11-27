import { useQuery } from "@tanstack/react-query";
import { getAllTrainings } from "../../services/apiTrainings";

export function useTrainings() {
  const { data: trainings, isLoading: loadingTrainings } = useQuery({
    queryKey: ["trainings"],
    queryFn: getAllTrainings,
  });

  console.log(trainings);

  return {
    trainings,
    loadingTrainings,
  };
}
