import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createRule as createRuleApi } from "../../services/apiRules";

export function useCreateRule() {
  const queryClient = useQueryClient();

  const {
    mutate: createRule,
    isLoading:isCreating,
  } = useMutation({
    mutationFn: createRuleApi,
    onSuccess: () => {
      toast.success("News Rule successfully created");
      queryClient.invalidateQueries({
        queryKey: ["rules"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
      console.log("error is", err);
    },
  });

  return { createRule, isCreating };
}
