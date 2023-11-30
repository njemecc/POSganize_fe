import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { createMembership as createMembershipApi } from "../../services/apiMemberships";

export function useCreateMembership() {
  const { userId } = useParams();

  const queryClient = useQueryClient();
  const { mutate: createMembership, isLoading: isCreating } = useMutation({
    mutationFn: createMembershipApi,
    onSuccess: () => {
      toast.success("New membership successfully created");
      queryClient.invalidateQueries({
        queryKey: ["membership", userId],
      });
    },
    onError: (err) => {
      toast.error(err.message);
      console.log("error is", err);
    },
  });

  return { createMembership, isCreating };
}
