import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import { FooterType } from "./shared/Footer";
import Subscription from "./loginESubscription/Subscription";
import { userContext } from "./loginESubscription/AuthContext";
import { useState } from "react";
// Login.tsx
import Login from "./loginESubscription/Login";
import Ecommerce from "./ecommerce/Ecommerce";

function App() {
  const [userLogged, setUserLogged] = useState(localStorage.getItem("userID")); //user salvato nel local storage

  return (
    <div className="dark bg-light-bg">
      <userContext.Provider value={Number(userLogged)}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/ecommerce/homepage" />} />
            {userLogged != "0" && (
              <Route path="/dashboard/*" element={<Dashboard />} />
            )}
            <Route path="/ecommerce/*" element={<Ecommerce />} />
            <Route
              path="/log-in"
              element={
                userLogged === "0" || !userLogged ? (
                  <Login />
                ) : (
                  <Navigate to="/ecommerce/homepage" />
                )
              }
            />
            <Route
              path="/subscription"
              element={
                userLogged === "0" || null ? (
                  <Subscription />
                ) : (
                  <Navigate to="/homepage" />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
