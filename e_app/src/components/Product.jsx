import React from "react";
import "./Product.css";

export default function Product(props) {
  const { title, price, rating, image } = props;
  var starClassNames = [];
  var baseClassName = "fa fa-star fa-lg";
  for (let i = 0; i <= 5; i++) {
    starClassNames.push(baseClassName);
  }
  for (let i = 0; i <= rating; i++) {
    starClassNames[i] += ` star__checked`;
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
        <div className="product__rating">
          <>
            {starClassNames.map((classNm, i) => {
              return <span key={i} className={classNm}></span>;
            })}
          </>
        </div>
      </div>
      <img src={require("" + image)} alt="product" />
      <button>Add to Cart</button>
    </div>
  );
}
