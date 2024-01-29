import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./store/Store";
import { Product } from "./product/Product";
import Header from "../shared/Header";
import FooterComponent, { FooterType } from "../shared/Footer";
import Homepage from "./homepage/Homepage";
import Cart from "./Cart/Cart";
import { ToastContainer } from "react-toastify";

const footerTest: FooterType = {
  logo: "/src/assets/logo_white-03.svg",
  firstFooterTitle: "Products",
  secondFooterTitle: "Our team",
  thirdFooterTitle: "Your account",
  firstColumnElement1: "Discounts",
  firstColumnElement2: "New products",
  firstColumnElement3: "Best sellers",
  secondColumnElement1: "Our story",
  secondColumnElement2: "Where are we",
  secondColumnElement3: "Legal notices",
  secondColumnElement4: "Contact us",
  secondColumnElement5: "Shops",
  thirdColumnElement1: "Orders",
  thirdColumnElement2: "Credits notes",
  thirdColumnElement3: "Addresses",
  thirdColumnElement4: "My alerts",
  thirdColumnElement5: "Personal informations",
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
        <ToastContainer />
      </div>
      <FooterComponent {...footerTest} />
    </div>
  );
}
