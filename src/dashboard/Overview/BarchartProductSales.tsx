import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useSalesData from "../Sales/useSalesData";

export default function BarchartProva() {
  const { salesData, setSalesData, loading, error } = useSalesData();

  const products = removeDuplicates(
    salesData ? salesData.map((el) => el.product_id) : []
  );

  const lunghezza = products
    ? products.map((el) => {
        return salesData.filter((d) => d.product_id === el);
      })
    : [];

  function removeDuplicates(arr: any) {
    return [...new Set(arr)];
  }

  const data = lunghezza.map((el) => {
    return { name: el[0].product_id, sales: el.length };
  });

  return (
    <div className="w-3/6">
      <h2 className="flex items-center text-3xl font-bold dark:text-white mb-2">
        Sales per product
      </h2>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="sales" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
