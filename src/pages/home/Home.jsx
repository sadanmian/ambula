import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="company">Ambula</div>
        <Link className="left" to={"/todolist"}>
          <div>To-Do-List</div>
        </Link>
        <Link className="right" to={"/shop"}>
          <div className="right">Shopping Cart</div>
        </Link>
      </div>
      <div className="footer">
        <span>
          Made By <b>Sadan Mian</b>
        </span>
      </div>
    </div>
  );
};
