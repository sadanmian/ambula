import React from "react";
import "./cart.css";

const CartItem = ({ data }) => {
  return (
    <div className="cartItem">
      <img src={data.productImage} alt="" />
      <div className="description">
        <p>
          <b>{data.productName}</b>
        </p>
        <p>${data.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
