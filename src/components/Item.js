import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrement,
  increment,
  total,
} from "../feautres/cart/cartSlice";
import { useState } from "react";

export default function Item({ id, name, price, img }) {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const [ShowPopUp, setShowPopUp] = useState(false);
  const handleClick = () => {
    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 1000);
  };
  return (
    <div id="item-container">
      <img src={img} id="img-item" />
      <div id="item-name">{name}</div>
      <div id="item-price">EGP {price}</div>
      <div id="arrow-button">
        <FaArrowDown
          id="down"
          onClick={() => {
            dispatch(decrement({ id }));
          }}
        />
        <FaArrowUp
          id="up"
          onClick={() => {
            dispatch(addToCart({ id, name, img, price }));
            handleClick();
          }}
        />
      </div>
      {ShowPopUp && <div id="pop-up">Item added to the cart</div>}
    </div>
  );
}
