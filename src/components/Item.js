import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, decrement } from "../feautres/cart/cartSlice";
import { useState } from "react";

export default function Item({ id, name, price, img, quantity }) {
  const dispatch = useDispatch();
  const [ShowPopUp, setShowPopUp] = useState(false);
  const [number, setNumber] = useState(0);
  const [popup, setPopup] = useState(false);
  const handleClick = () => {
    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 1200);
    setNumber((prev) => prev + 1);
  };

  const handleRemoveClick = () => {
    if (number >= 1) {
      setNumber((prev) => prev - 1);
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 1200);
    }
  };
  return (
    <div id="item-container">
      <img src={img} id="img-item" alt={name} />
      <div id="item-name">{name}</div>
      <div id="item-price">EGP {price}</div>
      <div id="arrow-button">
        <FaArrowDown
          id="down"
          onClick={() => {
            dispatch(decrement({ id }));
            handleRemoveClick(id);
          }}
        />
        {
          <div
            id="item-number"
            style={{ display: number < 1 ? "none" : "block" }}
          >
            {number}
          </div>
        }
        <FaArrowUp
          id="up"
          onClick={() => {
            dispatch(addToCart({ id, name, img, price }));
            handleClick();
          }}
        />
      </div>
      {ShowPopUp && <div id="pop-up">Item added to the cart</div>}
      {popup && (
        <div id="pop-up" style={{ backgroundColor: "red" }}>
          Item removed from the cart
        </div>
      )}
    </div>
  );
}
