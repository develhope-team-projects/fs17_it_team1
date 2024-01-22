// useReviewbyId.ts

import { useEffect, useState } from "react";

export type Review = {
  id: number;
  product_id: number;
  title: string;
  comment: string;
  creation_date: string;
  user_id: number;
  rating: number;
};

export default function useReviewbyId(productId: number) {
  const [reviewData, setReviewData] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchData(id: number) {
    setLoading(true);
    setError("");

    fetch(`http://localhost:3001/review/${id}`)
      .then((data) => {
        if (data.status !== 200) {
          setError("Error");
          return null;
        } else {
          return data.json();
        }
      })
      .then((data) => setReviewData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => fetchData(productId), [productId]);

  return {
    reviewData,
    setReviewData,
    loadingRev: loading,
    errorRev: error,
    onFetchData: fetchData,
  };
}
