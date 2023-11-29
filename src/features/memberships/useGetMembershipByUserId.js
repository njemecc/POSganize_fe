import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMembershipByUserId } from "../../services/apiMemberships";

export function useGetMembershipByUserId() {
  const { userId } = useParams();

  const { data: memberships, isLoading: loadingMemberships } = useQuery({
    queryKey: ["membership", userId],
    queryFn: () => getMembershipByUserId(userId),
  });

  return { memberships, loadingMemberships };
}
