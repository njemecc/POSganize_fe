import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getAllUsers } from "../../services/apiUsers";
import { PAGE_SIZE } from "../../utils/constants";
export function useUsers() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  //PAGINATION

  const pageNumber = !searchParams.get("page")
    ? 0
    : Number(searchParams.get("page"));

  const pageSize = PAGE_SIZE;

  //FILTER
  const status = !searchParams.get("status")
    ? "all"
    : searchParams.get("status");

  //QUERY
  const { data, isLoading: loadingUsers } = useQuery({
    queryKey: ["users", pageNumber, status],
    queryFn: () => getAllUsers({ pageNumber, pageSize, status }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(data?.numberOfUsers / PAGE_SIZE);

  if (pageNumber < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["users", pageNumber + 1, status],
      queryFn: () =>
        getAllUsers({ pageNumber: pageNumber + 1, pageSize, status }),
    });

  if (pageNumber > 1)
    queryClient.prefetchQuery({
      queryKey: ["users", pageNumber - 1, status],
      queryFn: () =>
        getAllUsers({ pageNumber: pageNumber - 1, pageSize, status }),
    });

  return {
    users: data?.users,
    loadingUsers,
    numberOfUsers: data?.numberOfUsers,
  };
}
