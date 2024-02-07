import { useQuery } from "@tanstack/react-query";
import { getMembersPerTraining } from "../../services/apiDashboard";
import { useSearchParams } from "react-router-dom";

export function useGetMembersPerTraining() {
  const [searchParams] = useSearchParams();

  const fromDate = searchParams.get("fromDate")
    ? searchParams.get("fromDate")
    : "2015-01-01";
  const toDate = searchParams.get("toDate")
    ? searchParams.get("toDate")
    : new Date().toISOString().substring(0, 10);

  const { data: membersPerTraining, isLoading: isLoading } = useQuery({
    queryKey: ["membersPerTraining", fromDate, toDate],
    queryFn: () => getMembersPerTraining({ fromDate, toDate }),
  });

  return { membersPerTraining, isLoading };
}
