import React from "react";

import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../stateProvider";
import "./Checkout.css";

export default function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
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
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              rating={item.rating}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
