// Login.tsx
import React, { useContext, useState } from "react";
import { Link, redirect } from "react-router-dom";
import InputField from "../shared/InputField";
import { NormalButton } from "../shared/NormalButton";
import useLogin from "./useLogin";
import { userContext } from "./AuthContext";

interface LoginData {
  email: string;
  password: string | number;
}

function Login() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const { userCredentials, setUserCredentials, login, logout } = useLogin();

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    login(loginData);
    // Puoi anche gestire la navigazione a una nuova pagina qui
  };

  return (
    <div className="h-screen flex justify-center items-center bg-beige-chiaro relative z-9 bg-opacity-50">
      <div className="h-50p w-96 py-8 bg-beige-scuro flex flex-col justify-center items-center gap-6 relative z-10 rounded-md">
        <InputField
          type="email"
          id="email"
          name="email"
          label="Insert email"
          value={loginData.email}
          onChange={handleChange}
        />
        <InputField
          type="password"
          id="password"
          name="password"
          label="Insert password"
          value={loginData.password}
          onChange={handleChange}
        />
        <NormalButton content="Log in" onClick={handleLogin} />
        <br />
        <p className="text-white">
          If you are not yet registered{" "}
          <Link to="/subscription" className="text-giallo cursor-pointer">
            click here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
