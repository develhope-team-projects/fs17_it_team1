// useReviewbyId.ts

import { useEffect, useState } from "react";

export type Review = {
  id: number;
  product_id: number;
  title: string;
  comment: string;
  creation_date: string;
  user_id: number;
};

export default function useReviewbyId(productId: number) {
  const [reviewData, setReviewData] = useState<Review[]>([]);
  const [loadingReview, setLoadingReview] = useState(false);
  const [errorReview, setErrorReview] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoadingReview(true);
      setErrorReview("");
    
      try {
        const response = await fetch(`http://localhost:3001/review/${productId}`);
        if (!response.ok) {
          setErrorReview("Error");
          return;
        }
    
        const data = await response.json();
        setReviewData(data);
      } catch (error) {
        setErrorReview('Error');
      } finally {
        setLoadingReview(false);
      }
    };
    fetchData();
  }, [productId]);

  return {
    reviewData,
    loadingReview,
    errorReview,
  };
}
