import { useQuery } from "@tanstack/react-query";
import { isUserActive as isUserActiveApi } from "../../services/apiUsers";

export function useIsActiveUser(id) {
  const { data: isUserActive, isLoading: isLoadingUserActive } = useQuery({
    queryKey: ["user", id],
    queryFn: () => isUserActiveApi(id),
  });

  return { isUserActive, isLoadingUserActive };
}
