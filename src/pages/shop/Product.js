import React from "react";

const Product = ({ data }) => {
  return (
    <div className="product">
      <img src={data.productImage} alt="" />
      <div className="description">
        <p>
          <b>{data.productName}</b>
        </p>
        <p> ${data.price}</p>
      </div>
      <button className="addToCartBttn">Add To Cart</button>
    </div>
  );
};

export default Product;
