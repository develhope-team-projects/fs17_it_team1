import React, { PureComponent, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import useUserData from "../UsersDashboard/useUserData";

type dataChart = {
  cx: any;
  cy: any;
  midAngle: any;
  innerRadius: any;
  outerRadius: any;
  percent: any;
  index: any;
};

const COLORS = ["#0088FE", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: dataChart) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PiechartGender() {
  const { userData, setUserData, loading, error } = useUserData();

  const male =
    !loading && !error
      ? userData.filter((el) => el.gender === "male" || el.gender === "Male")
      : [];

  const female =
    !loading && !error
      ? userData.filter(
          (el) => el.gender === "female" || el.gender === "Female"
        )
      : [];

  const data = [
    { name: "Male", value: male.length },
    { name: "Female", value: female.length },
  ];

  return (
    <div className="w-3/6">
      <h2 className="flex items-center text-3xl font-bold dark:text-white mb-2 justify-center mt-4">
        Users Genders
      </h2>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart width={500} height={500}>
          <Legend />

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
