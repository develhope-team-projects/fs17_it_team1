import { useEffect, useState } from "react";

export type UserDash = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  birth_day: string;
  location?: string;
  gender?: string;
  creation_date: string;
};

export default function useUserData() {
  type test = UserDash[];

  const test1: test = [];
  const [userData, setUserData] = useState(test1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchData() {
    setLoading(true);
    setError("");

    fetch(`http://localhost:3001/users`)
      .then((data) => {
        if (data.status !== 200) {
          setError("Error");
          return null;
        } else {
          return data.json();
        }
      })
      .then((data) => setUserData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => fetchData(), []);

  return {
    userData,
    loading,
    error,
    onFetchData: fetchData,
  };
}
