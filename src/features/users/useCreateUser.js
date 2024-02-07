import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { createUser as createUserApi } from "../../services/apiUsers";
import { ADMIN } from "../../utils/roles";
import { useUser } from "../authentication/useUser";

export function useCreateUser() {
  const navigate = useNavigate();
  const { role } = useUser();
  const queryClient = useQueryClient();
  const {
    mutate: createUser,
    isLoading: isCreating,
    status,
  } = useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      toast.success("New user successfully created");

      if (role !== ADMIN) {
        navigate("/login");
      }

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
