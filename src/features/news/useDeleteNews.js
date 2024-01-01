import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteNews as deleteNewsApi } from "../../services/apiNews";
export function useDeleteNews() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isDeleting, mutate: deleteNews } = useMutation({
    mutationFn: deleteNewsApi,
    onSuccess: () => {
      toast.success("News successfully deleted");
      navigate("/news");
      queryClient.invalidateQueries({
        queryKey: ["news"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    isDeleting,
    deleteNews,
  };
}
