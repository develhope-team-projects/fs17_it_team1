import { useEffect, useState } from "react";

export type ProductDash = {
  id: number;
  name: string;
  description: string;
  price: number;
  insertion_date: string;
  discount: number;
};

export default function useProductDatabyId( id :string) {
  type test = ProductDash[];

  const test1: test = [];
  const [productData, setProductData] = useState(test1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchData(id:string) {
    setLoading(true);
    setError("");

    fetch(`http://localhost:3001/products/${id}`)
      .then((data) => {
        if (data.status !== 200) {
          setError("Error");
          return null;
        } else {
          return data.json();
        }
      })
      .then((data) => setProductData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => fetchData(id), []);

  return {
    productData,
    setProductData,
    loading,
    error,
    onFetchData: fetchData,
  };
}
