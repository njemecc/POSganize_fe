import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/apiUsers";
import { useUser } from "../authentication/useUser";

export function useGetUser() {
  const { userId: paramsUserId } = useParams();
  const { userId: profileUserId } = useUser();

  const userId = paramsUserId ? paramsUserId : profileUserId;

  const { data: user, isLoading: loadingUser } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
  });

  return { user, loadingUser };
}
