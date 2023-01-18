import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear, clearItem } from "../feautres/cart/cartSlice";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(`/`);
  };
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(`amount ${amount} , total ${total} `);
  if (amount < 1) {
    return (
      <div className="empty-container">
        <h2 id="empty-h2">Shopping Cart</h2>
        <h4 id="empty-h4">is currently empty</h4>
        <button onClick={routeChange} id="empty-button">
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
              <h5 id="sandwich-h5">
                {item.name}
                <button
                  id="remove-item-button"
                  onClick={() => dispatch(clearItem(item.id))}
                >
                  Remove item
                </button>
              </h5>
            </div>
            <h4 id="quantity-num">{item.quantity}</h4>
            <h4>EGP {item.price}</h4>
            <h4>EGP {item.price * item.quantity}</h4>
          </div>
        );
      })}
      <hr className="hr" />
      <div className="footer-container">
        <button onClick={() => dispatch(clear())} className="clear">
          Clear Cart
        </button>
        <div id="right-footer">
          <h4>
            Total ( {amount} items ) : <span>EGP {total}</span>
          </h4>
          <p id="taxes-included">Taxes are icluded</p>
          <button className="proceed">proceed</button>
        </div>
      </div>
    </div>
  );
}
