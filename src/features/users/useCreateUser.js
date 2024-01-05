import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { createUser as createUserApi } from "../../services/apiUsers";

export function useCreateUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    mutate: createUser,
    isLoading: isCreating,
    status,
  } = useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      toast.success("New user successfully created");
      navigate("/login");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createUser, isCreating, status };
}
