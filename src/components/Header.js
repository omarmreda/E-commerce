import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import Search from "./Search";
import { Link } from "react-router-dom";
function Header() {
  const { amount } = useSelector((state) => state.cart);
  return (
    <div className="nav-menu">
      <a href="#" id="logo">
        O-Burger
      </a>
      <Search id="search-container" />
      <Link to="/cart" id="link">
        <div className="cart-container">
          <FaShoppingCart id="shopping-cart" />
          <div id="text-cart">Cart</div>
          <sup id="text-number">{amount}</sup>
        </div>
      </Link>
    </div>
  );
}

export default Header;
