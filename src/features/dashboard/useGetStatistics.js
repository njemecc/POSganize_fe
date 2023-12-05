import { useQuery } from "@tanstack/react-query";
import { getStatisticsByDate } from "../../services/apiDashboard";
import { useSearchParams } from "react-router-dom";

export function useGetStatistics() {
  const [searchParams] = useSearchParams();

  const fromDate = searchParams.get("fromDate")
    ? searchParams.get("fromDate")
    : "2015-01-01";
  const toDate = searchParams.get("toDate")
    ? searchParams.get("toDate")
    : new Date().toISOString().substring(0, 10);

  const { data: statistics, isLoading: isLoading } = useQuery({
    queryKey: ["statistics", fromDate, toDate],
    queryFn: () => getStatisticsByDate({ fromDate, toDate }),
  });

  return { statistics, isLoading };
}
