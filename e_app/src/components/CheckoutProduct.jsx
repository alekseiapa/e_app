import React from "react";
import { getStarsRating } from "./Product";
import "./CheckoutProduct.css";

export default function CheckoutProduct(props) {
  const { title, price, rating, image } = props;
  return (
    <div className="checkoutProduct">
      <img
        src={require("" + image)}
        alt=""
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>${price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <>
            {getStarsRating(rating).map((classNm, i) => {
              return <span key={i} className={classNm}></span>;
            })}
          </>
        </div>
        <button>Remove From Cart</button>
      </div>
    </div>
  );
}
