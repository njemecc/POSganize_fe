import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const ChartBox = styled.div`
  padding: 2.4rem 3.2rem;

  grid-column: 1 / span 2;

  & .recharts-pie-label-text {
    font-weight: 600;
  }

  & > *:first-child {
    margin-bottom: 1.6rem;
  }
`;

const MembersChart = ({ membersMonthData }) => {
  console.log(membersMonthData);
  return (
    <ChartBox>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={membersMonthData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="members" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="members"
            fill="#8884d8"
            // activeBar={<Rectangle fill="pink" stroke="pink"  />}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartBox>
  );
};

export default MembersChart;
