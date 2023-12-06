import { useQuery, useQueryClient } from "@tanstack/react-query";
import { isUserAuthenticated } from "../../services/apiAuth";
import { QueryClient } from "@tanstack/react-query";

export function useUser() {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["isAuthenticated"],
    queryFn: isUserAuthenticated,
  });

  // queryClient.setQueryData(["isAuthenticated"], user);

  const isAuthenticated = user?.isAuthenticated;
  const role = user?.role;
  const userId = user?.userId;

  return { isLoading, isAuthenticated, role, userId };
}
