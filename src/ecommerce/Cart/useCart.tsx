import { useEffect, useState } from "react";

export type CartDash = {
  product_id: number;
  quantity: number;
  creation_date?: string;
  id?: number;
  user_id: number;
};

export default function useCart(userId: number) {
  type test = CartDash[];

  const test1: test = [];
  const [CartData, setCartData] = useState(test1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchData() {
    setLoading(true);
    setError("");

    fetch(`http://localhost:3001/cart/${userId}`)
      .then((data) => {
        if (data.status !== 200) {
          setError("Error");
          return null;
        } else {
          return data.json();
        }
      })
      .then((data) => setCartData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => fetchData(), []);

  return {
    CartData,
    setCartData,
    loading,
    error,
    onFetchData: fetchData,
  };
}
