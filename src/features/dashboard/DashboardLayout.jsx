import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";

//charts
import RevenueChart from "./RevenueChart";
import TrainingChart from "./TrainingsChart";

//hooks
import { useGetStatistics } from "./useGetStatistics";
import { useGetMembersPerTraining } from "./useGetMembersPerTraining";
import MembersChart from "./MembersChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { statistics, isLoading: isLoading1 } = useGetStatistics();

  const { membersPerTraining, isLoading: isLoading2 } =
    useGetMembersPerTraining();

  if (isLoading1 || isLoading2) return <Spinner />;

  const revenueData = statistics.revenue_and_members.map(
    ({ month, price, year, members }) => {
      return { price, date: `${month} ${year}` };
    }
  );

  console.log("rev", revenueData);

  const membersMonthData = statistics.revenue_and_members.map(
    ({ month, price, year, members }) => {
      return { members, date: `${month} ${year}` };
    }
  );

  const totalRevenue = statistics.RevenueAndMembersByMonth.totalRevenue;
  const totalMembers = statistics.RevenueAndMembersByMonth.totalMembers;
  const mostPopularTraining = statistics.MostPopularTraining;
  const numberOfTrainings = statistics.NumberOfActiveTrainings;

  return (
    <StyledDashboardLayout>
      <Stats
        totalRevenue={totalRevenue}
        totalMembers={totalMembers}
        mostPopularTraining={mostPopularTraining}
        numberOfTrainings={numberOfTrainings}
      />
      <MembersChart membersMonthData={membersMonthData} />

      <TrainingChart membersPerTraining={membersPerTraining} />
      <RevenueChart revenueData={revenueData} />
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
