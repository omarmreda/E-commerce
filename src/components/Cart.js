import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clear } from "../feautres/cart/cartSlice";

export default function Cart() {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <div className="empty-container">
        <h2 id="empty-h2">Shopping Cart</h2>
        <h4 id="empty-h4">is currently empty</h4>
        <button onClick={() => {}} id="empty-button">
          Go Shopping
        </button>
        <hr className="hr" />
      </div>
    );
  }
  return (
    <div className="cart2-container">
      <h2>Shopping Cart</h2>
      <div id="heading-container">
        <div>Item</div>
        <div>Amount</div>
        <div>Price</div>
        <div>Total</div>
      </div>
      <hr className="hr" />

      {cartItems?.map((item) => {
        return (
          <div key={item.key} id="item-cart-container">
            <div id="sanwich-in-cart-container">
              <img src={item.img} id="img-cart" />
              <h3>{item.name}</h3>
            </div>
            <h3>{item.quantity}</h3>
            <h4>EGP {item.price}</h4>
            <h4>EGP {item.price * item.quantity}</h4>
          </div>
        );
      })}
      <hr className="hr" />
      <div className="footer-container">
        <button onClick={() => dispatch(clear())}>Clear Cart</button>
        <div>
          <h4>
            Total({amount} items) : <span>EGP {total}</span>
          </h4>
          <button>proceed</button>
        </div>
      </div>
    </div>
  );
}
