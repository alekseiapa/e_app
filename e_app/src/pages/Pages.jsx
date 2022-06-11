import React from "react";
import Checkout from "./Checkout";
import Header from "../components/Header";
import Home from "./Home";

export function CheckoutPage() {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
}

export function HomePage() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
