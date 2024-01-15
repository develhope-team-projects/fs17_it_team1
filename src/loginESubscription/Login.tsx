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

    console.log(loginData);
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    login(loginData);
    console.log(userCredentials);

    // Puoi anche gestire la navigazione a una nuova pagina qui
  };

  return (
    <div className="h-96 flex justify-center items-center bg-our-black relative z-9 bg-opacity-50">
      <div className="h-50p w-96 py-8 bg-our-black flex flex-col justify-center items-center gap-6 relative z-10 rounded-md">
        <InputField
          type="email"
          id="email"
          name="email"
          label="Inserisci email"
          value={loginData.email}
          onChange={handleChange}
        />
        <InputField
          type="password"
          id="password"
          name="password"
          label="Inserisci password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button content="Log in" onClick={handleLogin}>
          {" "}
          Login
        </button>
        <br />
        <p className="text-gray-400">
          Se non sei ancora iscritto{" "}
          <Link to="/subscription" className="text-oro-chiaro cursor-pointer">
            clicca qui
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
