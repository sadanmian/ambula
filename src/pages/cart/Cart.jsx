import React, { useContext } from "react";
import "./cart.css";
import { Navbar } from "../../components/navbar/Navbar";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div>
      <Navbar />
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
          })}
        </div>
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
