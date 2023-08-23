import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { PRODUCTS } from "../../products";
import Product from "./Product";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="shop">
        <div className="shopTitle">
          <h1>Ambula Shop</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((e) => (
            <Product key={e.id} data={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
