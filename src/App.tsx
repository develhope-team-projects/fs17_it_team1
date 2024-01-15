import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import FooterComponent, { FooterType } from "./shared/Footer";
import Subscription from "./loginESubscription/Subscription";
import { userContext } from "./loginESubscription/AuthContext";
import { useContext, useState } from "react";
// Login.tsx
import Login from "./loginESubscription/Login";

const footerTest: FooterType = {
  logo: "https://flowbite.com/docs/images/logo.svg",
  firstFooterTitle: "Prodotti",
  secondFooterTitle: "Il nostro team",
  thirdFooterTitle: "Il tuo account",
  firstColumnElement1: "Offerte",
  firstColumnElement2: "Nuovi prodotti",
  firstColumnElement3: "Più venduti",
  secondColumnElement1: "Chi siamo",
  secondColumnElement2: "Dove ci troviamo",
  secondColumnElement3: "Note legali",
  secondColumnElement4: "Contattaci",
  secondColumnElement5: "Negozi",
  thirdColumnElement1: "Ordini",
  thirdColumnElement2: "Note di credito",
  thirdColumnElement3: "Indirizzi",
  thirdColumnElement4: "I miei avvisi",
  thirdColumnElement5: "Informazioni personali",
};

function App() {
  const [userLogged, setUserLogged] = useState(localStorage.getItem("userID")); //user salvato nel local storage

  return (
    <div className="dark">
      <userContext.Provider value={Number(userLogged)}>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/subscription" element={<Subscription />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
