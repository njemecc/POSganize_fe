import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteRule as deleteRuleApi } from "../../services/apiRules";

export function useDeleteRule() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteRule } = useMutation({
    mutationFn: deleteRuleApi,
    onSuccess: () => {
      toast.success("Rule successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["rules"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
      console.log("Error is : ", err);
    },
  });

  return {
    isDeleting,
    deleteRule,
  };
}
