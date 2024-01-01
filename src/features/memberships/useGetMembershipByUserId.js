import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMembershipByUserId } from "../../services/apiMemberships";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { useUser } from "../authentication/useUser";
export function useGetMembershipByUserId() {
  const [searchParams] = useSearchParams();

  const { userId: paramsUserId } = useParams();
  const { userId: profileUserId } = useUser();

  const userId = paramsUserId ? paramsUserId : profileUserId;

  //PAGINATION

  const pageNumber = !searchParams.get("page")
    ? 0
    : Number(searchParams.get("page"));

  const pageSize = PAGE_SIZE;

  //sort
  const sortBy = searchParams.get("sortOrder")
    ? searchParams.get("sortOrder")
    : "desc";

  const { data: memberships, isLoading: loadingMemberships } = useQuery({
    queryKey: ["membership", userId, sortBy, pageNumber],
    queryFn: () =>
      getMembershipByUserId({ userId, sortBy, pageNumber, pageSize }),
  });

  return {
    memberships: memberships?.memberships,
    loadingMemberships,
    numberOfMemberships: memberships?.numberOfMemberships,
  };
}
