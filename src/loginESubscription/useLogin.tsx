import { useState } from "react";
import useUserData from "../dashboard/UsersDashboard/useUserData";
import { userContext } from "./AuthContext";

export default function useLogin() {
  const [userCredentials, setUserCredentials] = useState(0);

  const { userData, setUserData, loading, error, onFetchData } = useUserData();

  const login = (credentials: { email: string; password: string | number }) => {
    const loginData = userData.filter((el) => el.email === credentials.email);
    if (loginData.length > 0) {
      setUserCredentials(loginData[0].id);
      // salva nel local storage
    } else {
      setUserCredentials(0);
      // salva nel local storage
    }
  };

  const logout = () => {
    setUserCredentials(0);
    // salva nel local storage
  };

  return {
    userCredentials,
    setUserCredentials,
    login,
    logout,
  };
}
