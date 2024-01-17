import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./store/Store";
import { Product } from "./product/Product";
import Header from "../shared/Header";
import FooterComponent, { FooterType } from "../shared/Footer";
import Homepage from "./homepage/Homepage";

const footerTest: FooterType = {
  logo: "/src/assets/logo_white-03.svg",
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
export default function Ecommerce() {
  return (
    <div>
      <div className="max-w-screen-xl m-auto">
        <Header />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
      <FooterComponent {...footerTest} />
    </div>
  );
}
