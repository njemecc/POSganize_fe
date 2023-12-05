import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSchedule as deleteScheduleApi } from "../../services/apiSchedules";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useDeleteSchedule() {
  const queryClient = useQueryClient();
  const { trainingId } = useParams();
  const { isLoading: isDeletingSchedule, mutate: deleteSchedule } = useMutation(
    {
      mutationFn: deleteScheduleApi,
      onSuccess: () => {
        toast.success("Schedule successfully deleted");
        queryClient.invalidateQueries({
          queryKey: ["training", trainingId],
        });
      },
      onError: (err) => {
        toast.error(err.message);
        console.log("Error is  : ", err);
      },
    }
  );

  return {
    isDeletingSchedule,
    deleteSchedule,
  };
}
