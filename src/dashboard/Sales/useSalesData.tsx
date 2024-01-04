import { useEffect, useState } from "react";

export type salesDash = {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  address: string;
  creation_date: string;
};

export default function useSalesData() {
  type test = salesDash[];

  const test1: test = [];
  const [salesData, setSalesData] = useState(test1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchData() {
    setLoading(true);
    setError("");

    fetch(`http://localhost:3001/orders`)
      .then((data) => {
        if (data.status !== 200) {
          setError("Error");
          return null;
        } else {
          return data.json();
        }
      })
      .then((data) => setSalesData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => fetchData(), []);

  return {
    salesData,
    setSalesData,
    loading,
    error,
    onFetchData: fetchData,
  };
}
