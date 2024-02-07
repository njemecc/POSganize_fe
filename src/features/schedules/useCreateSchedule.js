import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { createScheduleByTrainingId as createScheduleByTrainingIdApi } from "../../services/apiSchedules";

export function useCreateSchedule() {
  const queryClient = useQueryClient();
  const { trainingId } = useParams();

  const { mutate: createScheduleByTrainingId, isLoading: isCreating } =
    useMutation({
      mutationFn: createScheduleByTrainingIdApi,
      onSuccess: () => {
        toast.success("New schedule successfully created ");
        queryClient.invalidateQueries({
          queryKey: ["training", trainingId],
        });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  return { createScheduleByTrainingId, isCreating };
}
