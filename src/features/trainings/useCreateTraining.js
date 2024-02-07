import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createTraining as createTrainingApi } from "../../services/apiTrainings";

export function useCreateTraining() {
  const queryClient = useQueryClient();

  const { mutate: createTraining, isLoading: isCreating } = useMutation({
    mutationFn: createTrainingApi,
    onSuccess: () => {
      toast.success("New training successfully created ");
      queryClient.invalidateQueries({
        queryKey: ["trainings"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createTraining, isCreating };
}
