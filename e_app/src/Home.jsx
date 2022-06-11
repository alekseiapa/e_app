import React from "react";
import Product from "./Product";
import { products } from "./sampleData";
import "./Home.css";

export default function Home() {
  const baseUrl = "./images/";
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
            {products.slice(0, 2).map((product) => (
              <Product
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={baseUrl + product.image}
              />
            ))}
          </div>
          <div className="home__row">
            {products.slice(2, 5).map((product) => (
              <Product
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={baseUrl + product.image}
              />
            ))}
          </div>
          <div className="home__row">
            {products.slice(5).map((product) => (
              <Product
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={baseUrl + product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
