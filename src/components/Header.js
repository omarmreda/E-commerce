import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import NavIcons from "./NavIcons";
import { Link } from "react-router-dom";
function Header() {
  const { amount } = useSelector((state) => state.cart);
  return (
    <div className="nav-menu">
      <Link to="/" id="logo">
        O-Burger
      </Link>
      <NavIcons id="search-container" />
      <Link to="/cart" id="link">
        <div className="cart-container">
          <FaShoppingCart id="shopping-cart" />
          <div id="text-cart">Cart</div>
          <div
            id="number-cart"
            style={{ visibility: amount < 1 ? "hidden" : "visible" }}
          >
            {amount}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
