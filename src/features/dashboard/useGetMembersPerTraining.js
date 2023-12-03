import { useQuery } from "@tanstack/react-query";
import { getMembersPerTraining } from "../../services/apiDashboard";

export function useGetMembersPerTraining() {
  const { data: membersPerTraining, isLoading: isLoading } = useQuery({
    queryKey: ["membersPerTraining"],
    queryFn: getMembersPerTraining,
  });

  return { membersPerTraining, isLoading };
}
