import { checkDuplicateTraining } from "../../services/apiTrainings";
import { useQuery } from "@tanstack/react-query";

export function useDuplicateTraining(id) {
  const { data, isLoading: isLoadingDuplicate } = useQuery({
    queryKey: ["isDuplicate", id],
    queryFn: () => checkDuplicateTraining(id),
  });

  const isDuplicate = data?.isDuplicate;

  return {
    isDuplicate,
    isLoadingDuplicate,
  };
}
