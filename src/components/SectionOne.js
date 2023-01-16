import React from "react";
import img1 from "../imgs/img.png";
export default function SectionOne() {
  return (
    <div className="section-div">
      <p className="header-paragraph">
        <i>Order your Favourite</i>
        <br />
        <span id="sanwich-span">
          <i>Sandwich and Juice</i>
        </span>
        <button className="button-17" role="button">
          Order Now
        </button>
      </p>
      <img src={img1} className="burger-img" />
    </div>
  );
}
