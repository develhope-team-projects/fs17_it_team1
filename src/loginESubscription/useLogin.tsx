import { useContext, useState } from "react";
import useUserData from "../dashboard/UsersDashboard/useUserData";
import { userContext } from "./AuthContext";

export default function useLogin() {
  const [userCredentials, setUserCredentials] = useState(0);

  const { userData, setUserData, loading, error, onFetchData } = useUserData();

  const [context, setContext] = useContext(userContext);

  console.log(context);

  const login = (credentials: { email: string; password: string | number }) => {
    const loginData = userData.filter((el) => el.email === credentials.email);
    if (loginData.length > 0) {
      setUserCredentials(loginData[0].id);
      setContext(loginData[0].id);
    } else {
      setUserCredentials(0);
    }
  };

  const logout = () => {
    // Effettua il logout
    // Resetta setUserCredentials a null o ad uno stato iniziale
    setUserCredentials(0);
  };

  return {
    userCredentials,
    setUserCredentials,
    login,
    logout,
  };
}
