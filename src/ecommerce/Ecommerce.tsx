import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "../store/Store";
import { Product } from "../product/Product";
import Header from "../shared/Header";
import FooterComponent from "../shared/Footer";

export default function Ecommerce() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <FooterComponent
        logo={""}
        firstFooterTitle={""}
        secondFooterTitle={""}
        thirdFooterTitle={""}
        firstColumnElement1={""}
        firstColumnElement2={""}
        firstColumnElement3={""}
        secondColumnElement1={""}
        secondColumnElement2={""}
        secondColumnElement3={""}
        secondColumnElement4={""}
        secondColumnElement5={""}
        thirdColumnElement1={""}
        thirdColumnElement2={""}
        thirdColumnElement3={""}
        thirdColumnElement4={""}
        thirdColumnElement5={""}
      />
    </div>
  );
}
