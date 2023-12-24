import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createNews as createNewsApi } from "../../services/apiNews";

export function useCreateNews() {
  const queryClient = useQueryClient();

  const {
    mutate: createNews,
    isLoading:isCreating,
  } = useMutation({
    mutationFn: createNewsApi,
    onSuccess: () => {
      toast.success("News News successfully created");
      queryClient.invalidateQueries({
        queryKey: ["news"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
      console.log("error is", err);
    },
  });

  return { createNews, isCreating };
}
