import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateTraining as updateTrainingApi } from "../../services/apiTrainings";

export function useUpdateTraining() {
  const queryClient = useQueryClient();

  const { mutate: updateTraining, isLoadin: isUpdating } = useMutation({
    mutationFn: updateTrainingApi,
    onSuccess: () => {
      toast.success("Training succesfully updated");
      queryClient.invalidateQueries({
        queryKey: ["trainings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateTraining, isUpdating };
}
