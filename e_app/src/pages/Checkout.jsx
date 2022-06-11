import React from "react";

import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";
import "./Checkout.css";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src={require("../components/images/checkout_ad.jpg")}
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
