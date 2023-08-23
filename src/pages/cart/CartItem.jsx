import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/ShopContext";

const CartItem = ({ data }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={data.productImage} alt="" />
      <div className="description">
        <p>
          <b>{data.productName}</b>
        </p>
        <p>${data.price}</p>
        <div className="countHandler">
          <button
            className="cartItemBtn"
            onClick={() => removeFromCart(data.id)}
          >
            {" "}
            -{" "}
          </button>
          <input className="cartItemInput"
            value={cartItems[data.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), data.id)
            }
          />
          <button className="cartItemBtn" onClick={() => addToCart(data.id)}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
