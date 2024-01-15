// AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import useUserData from "../dashboard/UsersDashboard/useUserData";

interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextValue {
    userCredentials: number | null;
    login: (credentials: { email: string; password: string | number }) => void;
    logout: () => void;
}


export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [userCredentials, setUserCredentials] = useState(0);

    const {
        userData,
        setUserData,
        loading,
        error,
        onFetchData
    } = useUserData()


    const login = (credentials: { email: string; password: string | number }) => {
        // Effettua l'accesso con le credenziali fornite
        // Aggiorna setUserCredentials con le informazioni dell'utente autenticato
        const loginData = userData.filter((el)=> el.email === credentials.email)
        if (loginData.length > 0){
            setUserCredentials(loginData[0].id);
        } else {
            setUserCredentials(0);
        }


    };

    const logout = () => {
        // Effettua il logout
        // Resetta setUserCredentials a null o ad uno stato iniziale
        setUserCredentials(0);
    };

    return (
        <AuthContext.Provider value={{ userCredentials, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Utente sconosciuto");
    }
    return context;
};
