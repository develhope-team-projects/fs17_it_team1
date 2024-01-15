// Login.tsx
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../shared/InputField";
import { NormalButton } from "../shared/NormalButton";
import { AuthContext, useAuth } from "./AuthContext";


interface LoginData {
    email: string;
    password: string | number;
}

function Login() {
    const [loginData, setLoginData] = useState<LoginData>({
        email: "",
        password: "",
    });

    const contesto = useContext(AuthContext)
    console.log(contesto)

    const { login } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        login(loginData);
        // Puoi anche gestire la navigazione a una nuova pagina qui
    };

    return (
        <div className="h-96 flex justify-center items-center bg-our-black relative z-9 bg-opacity-50">

            <div className="h-50p w-96 py-8 bg-our-black flex flex-col justify-center items-center gap-6 relative z-10 rounded-md">
                <InputField
                    type="email"
                    id="Email"
                    name="email"
                    label="Inserisci email"
                    value={loginData.email}
                    onChange={handleChange}
                />
                <InputField
                    type="password"
                    id="Password"
                    name="password"
                    label="Inserisci password"
                    value={loginData.password}
                    onChange={handleChange}
                />
                <NormalButton content="Log in" onClick={handleLogin} />
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
