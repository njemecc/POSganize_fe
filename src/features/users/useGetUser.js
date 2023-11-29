import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/apiUsers";

export function useGetUser() {
  const { userId } = useParams();

  const { data: user, isLoading: loadingUser } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
  });

  return { user, loadingUser };
}
