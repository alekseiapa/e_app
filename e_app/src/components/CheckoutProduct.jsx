import React from "react";
import "./CheckoutProduct.css";

export default function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img
        src={require("./images/iphone12.jpg")}
        alt=""
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          Apple iPhone 12, 256GB, Red - Unlocked (Renewed Premium)
        </p>
        <p className="checkoutProduct__price">
          <strong>$99</strong>
        </p>
        <div className="checkoutProduct__rating">
          <span className="fa fa-star fa-lg star__checked"></span>
          <span className="fa fa-star fa-lg star__checked"></span>
          <span className="fa fa-star fa-lg star__checked"></span>
          <span className="fa fa-star fa-lg star__checked"></span>
          <span className="fa fa-star fa-lg star__checked"></span>
        </div>
        <button>Remove From Cart</button>
      </div>
    </div>
  );
}
