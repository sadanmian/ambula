import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/ShopContext";

const Product = ({ data }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[data.id];
  return (
    <div className="product">
      <img src={data.productImage} alt="" />
      <div className="description">
        <p>
          <b>{data.productName}</b>
        </p>
        <p> ${data.price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(data.id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
