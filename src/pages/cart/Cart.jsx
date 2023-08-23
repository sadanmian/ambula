import React, { useContext } from "react";
import "./cart.css";
import { Navbar } from "../../components/navbar/Navbar";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <hr />
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
        {totalAmount > 0 ? (
          <>
            <div className="checkout">
              <p>Subtotal: ${totalAmount}</p>
              <button onClick={() => navigate("/shop")}>
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>Your Cart is empty</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
