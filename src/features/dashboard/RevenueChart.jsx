import DashboardBox from "./DashboardBox";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function RevenueChart({ revenueData }) {
  const isDarkMode = false;

  const colors = isDarkMode
    ? {
        totalRevenue: { stroke: "#4f46e5", fill: "#4f46e5" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalRevenue: { stroke: "#4f46e5", fill: "#c7d2fe" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledSalesChart>
      <Heading as="h2">Revenue</Heading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={revenueData}>
          <XAxis
            dataKey="date"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="price"
            type="monotone"
            stroke={colors.totalRevenue.stroke}
            fill={colors.totalRevenue.fill}
            strokeWidth={2}
            name="Total revenue"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default RevenueChart;
