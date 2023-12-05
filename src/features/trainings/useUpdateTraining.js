import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateTraining as updateTrainingApi } from "../../services/apiTrainings";
import { useParams } from "react-router-dom";

export function useUpdateTraining() {
  const queryClient = useQueryClient();

  const { trainingId } = useParams();

  const { mutate: updateTraining, isLoadin: isUpdating } = useMutation({
    mutationFn: updateTrainingApi,
    onSuccess: () => {
      toast.success("Training succesfully updated");
      queryClient.invalidateQueries({
        queryKey: ["trainings"],
      });

      queryClient.invalidateQueries({
        queryKey: ["training", trainingId],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateTraining, isUpdating };
}
