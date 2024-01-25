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
import useSalesLinesData from "../Sales/useSalesLinesData";
import useProductDatabyId from "../Product/useProductDatabyId";
import useProductData from "../Product/useProductData";

export default function BarchartProva() {
  const { salesData, setSalesData, loading, error } = useSalesLinesData();
  const { productData } = useProductData();

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
    const product = productData.filter((ele) => ele.id === el[0].product_id);
    if (el.length === 1) {
      return {
        id: el[0].product_id,
        name: product[0].name,
        sales: el[0].quantity,
      };
    } else {
      let totQuantity = 0;

      el.forEach((element) => {
        totQuantity += Number(element.quantity);
      });
      return {
        id: el[0].product_id,
        name: product[0].name,
        sales: totQuantity,
      };
    }
  });

  return (
    <div className="w-3/6">
      <h2 className="flex items-center text-3xl font-bold dark:text-white mb-2 justify-center mt-4">
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

          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="sales" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
