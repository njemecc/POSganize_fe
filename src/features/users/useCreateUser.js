import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createUser as createUserApi } from "../../services/apiUsers";

export function useCreateUser() {
  const queryClient = useQueryClient();
  const { mutate: createUser, isLoading: isCreating } = useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      toast.success("New user successfully created");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createUser, isCreating };
}
