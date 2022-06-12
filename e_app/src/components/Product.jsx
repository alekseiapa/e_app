import React from "react";
import { useStateValue } from "../stateProvider.js";
import "./Product.css";

export const getStarsRating = (rating) => {
  var starClassNames = [];
  var baseClassName = "fa fa-star fa-lg";
  for (let i = 0; i < 5; i++) {
    starClassNames.push(baseClassName);
  }
  for (let i = 0; i <= rating; i++) {
    starClassNames[i] += ` star__checked`;
  }
  return starClassNames;
};

export default function Product(props) {
  const { id, title, price, rating, image } = props;
  const [state, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          <>
            {getStarsRating(rating).map((classNm, i) => {
              return <span key={i} className={classNm}></span>;
            })}
          </>
        </div>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
      </div>
      <img src={require("" + image)} alt="product" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
