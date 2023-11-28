import { useParams } from "react-router-dom";
import { getTraining } from "../../services/apiTrainings";
import { useQuery } from "@tanstack/react-query";
export function useGetTrainingById() {
  const { trainingId } = useParams();

  const { data: training, isLoading: loadingTraining } = useQuery({
    queryKey: ["training", trainingId],
    queryFn: () => getTraining(trainingId),
  });

  return {
    training,
    loadingTraining,
  };
}
