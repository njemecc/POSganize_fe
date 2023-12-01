import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMembershipByUserId } from "../../services/apiMemberships";
import { useSearchParams } from "react-router-dom";
export function useGetMembershipByUserId() {
  const [searchParams] = useSearchParams();

  const { userId } = useParams();
  const sortBy = searchParams.get("sortOrder")
    ? searchParams.get("sortOrder")
    : "desc";

  //sort

  const { data: memberships, isLoading: loadingMemberships } = useQuery({
    queryKey: ["membership", userId, sortBy],
    queryFn: () => getMembershipByUserId({ userId, sortBy }),
  });

  return {
    memberships: memberships?.memberships,
    loadingMemberships,
    numberOfMemberships: memberships?.numberOfMemberships,
  };
}
