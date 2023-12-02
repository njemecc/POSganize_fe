import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import FromToFilter from "../features/dashboard/FromToFilter";
const Dashboard = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <FromToFilter />
      </Row>
      <DashboardLayout />
    </>
  );
};

export default Dashboard;
