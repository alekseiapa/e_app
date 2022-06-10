import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Apple iPhone 12 Pro, 128GB, Graphite - Unlocked (Renewed Premium)</p>
        <p className="product__price">
          <strong>$30</strong>
        </p>
        <div className="product__rating">
          <span class="fa fa-star fa-lg	 star__checked"></span>
          <span class="fa fa-star fa-lg	 star__checked"></span>
          <span class="fa fa-star fa-lg	 star__checked"></span>
          <span class="fa fa-star fa-lg	star__checked"></span>
          <span class="fa fa-star fa-lg	"></span>
        </div>
      </div>
      <img src={require("./images/iphone13.jpg")} alt="iphone13" />
      <button>Add to Cart</button>
    </div>
  );
}
