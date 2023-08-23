import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Ambula</Link>
        <Link to={"/cart"}>
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
};
