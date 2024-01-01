import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styled from "styled-components";

import Heading from "../../ui/Heading";

//hooks
import { useState } from "react";

const ChartBox = styled.div`
  padding: 2.4rem 3.2rem;

  grid-column: 3 / span 2;

  & .recharts-pie-label-text {
    font-weight: 600;
  }

  & > *:first-child {
    margin-bottom: 1.6rem;
  }
`;

const LightColors = [
  {
    color: "#ef4444",
  },
  {
    color: "#f97316",
  },
  {
    color: "#eab308",
  },
  {
    color: "#84cc16",
  },
  {
    color: "#22c55e",
  },
  {
    color: "#14b8a6",
  },
  {
    color: "#3b82f6",
  },
  {
    color: "#a855f7",
  },
];

const DarkColors = [
  {
    color: "#b91c1c",
  },
  {
    color: "#c2410c",
  },
  {
    color: "#a16207",
  },
  {
    color: "#4d7c0f",
  },
  {
    color: "#15803d",
  },
  {
    color: "#0f766e",
  },
  {
    color: "#1d4ed8",
  },
  {
    color: "#7e22ce",
  },
];

function TrainingChart({ membersPerTraining }) {
  // const isDarkMode = false;
  // const startData = isDarkMode ? startDataDark : startDataLight;

  const startData = membersPerTraining.map((training, i) => {
    return { ...training, color: LightColors[i].color };
  });

  return (
    <ChartBox>
      {/* <Heading type="h2">Trainings summary</Heading> */}
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={startData}
            nameKey="training"
            dataKey="numberOfMembers"
            cx="40%"
            cy="50%"
            innerRadius={85}
            outerRadius={110}
            fill="#4f46e5"
            paddingAngle={3}
            startAngle={180}
            endAngle={-180}
          >
            {startData.map(({ training, numberOfMembers, color }) => (
              <Cell key={training} fill={color} stroke={color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default TrainingChart;
