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
import useSalesData from "../Sales/useSalesData";

const cardinal = curveCardinal.tension(0.2);

export default function AreachartSales() {
  const { salesData, setSalesData, loading, error } = useSalesData();

  const processedData =
    !loading && !error
      ? salesData.map((el) => {
          return { ...el, creation_date: el.creation_date.split("T")[0] };
        })
      : [];

  const creationDates = removeDuplicates(
    processedData ? processedData.map((el) => el.creation_date) : []
  );

  const lunghezza = creationDates
    ? creationDates.map((el) => {
        return processedData.filter((d) => d.creation_date === el);
      })
    : [];

  function removeDuplicates(arr: any) {
    return [...new Set(arr)];
  }

  const data = lunghezza.map((el) => {
    return { name: el[0].creation_date, sales: el.length };
  });

  return (
    <div className="h-3/6">
      <h2 className="flex items-center text-3xl font-bold dark:text-white mb-2 justify-center">
        Sales
      </h2>
      <ResponsiveContainer width="100%" height="85%">
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
    </div>
  );
}
