import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";

const data = [
  {
    name: "01/01",
    sales: 30,
  },
  {
    name: "02/01",
    sales: 30,
  },
  {
    name: "03/01",
    sales: 20,
  },
  {
    name: "04/01",
    sales: 27,
  },
  {
    name: "05/01",
    sales: 18,
  },
  {
    name: "06/01",
    sales: 23,
  },
  {
    name: "07/01",
    sales: 34,
  },
];

const cardinal = curveCardinal.tension(0.2);

export default function AreachartProva() {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
        <Area
          type={cardinal}
          dataKey="sales"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
