import React from "react";
import { getStarsRating } from "./Product";
import { useStateValue } from "../stateProvider";
import "./CheckoutProduct.css";

export default function CheckoutProduct(props) {
  const { id, title, price, rating, image } = props;
  const [{ cart }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
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
        <button onClick={removeItem}>Remove From Cart</button>
      </div>
    </div>
  );
}
