import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTraining as deleteTrainingApi } from "../../services/apiTrainings";
import { toast } from "react-hot-toast";

export function useDeleteTraining() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTraining } = useMutation({
    mutationFn: deleteTrainingApi,
    onSuccess: () => {
      toast.success("Training successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["trainings"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    isDeleting,
    deleteTraining,
  };
}
