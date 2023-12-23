import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteNews as deleteNewsApi } from "../../services/apiNews";
export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteNews } = useMutation({
    mutationFn: deleteNewsApi,
    onSuccess: () => {
      toast.success("News successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["news"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
      console.log("Error is : ", err);
    },
  });

  return {
    isDeleting,
    deleteNews,
  };
}
