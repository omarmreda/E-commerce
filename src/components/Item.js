import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrement,
  increment,
  total,
} from "../feautres/cart/cartSlice";

export default function Item({ id, name, price, img, quantity }) {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  return (
    <div id="item-container">
      <img src={img} id="img-item" />
      <FaArrowUp
        id="up"
        onClick={() => {
          dispatch(increment({ id }));
        }}
      />
      <FaArrowDown
        id="down"
        onClick={() => {
          dispatch(decrement({ id }));
        }}
      />
      <div id="item-name">{name}</div>
      <div id="item-price">EGP {price}</div>
      <button
        className="add-button"
        onClick={() => dispatch(addToCart({ id, name, img, price }))}
      >
        Add to Cart
      </button>
    </div>
  );
}
