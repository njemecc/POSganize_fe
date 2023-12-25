import { useQuery } from "@tanstack/react-query";
import { getAllRules } from "../../services/apiRules";

export function useGetRules() {
  const { data: rules, isLoading } = useQuery({
    queryKey: ["rules"],
    queryFn: getAllRules,
  });

  return { rules, isLoading };
}
