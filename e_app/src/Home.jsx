import React from "react";
import Product from "./Product";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src={require("./images/home_img.jpg")}
            alt=""
            className="home__image"
          />
          <div className="home__row">
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}
