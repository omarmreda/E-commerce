import React from "react";
import img1 from "../imgs/img.png";
import { Link } from "react-scroll";
export default function SectionOne() {
  return (
    <div className="section-div">
      <p className="header-paragraph">
        <i>Order your Favourite</i>
        <br />
        <span id="sanwich-span">
          <i>Sandwich and Juice</i>
        </span>
        <Link to="sandwich" spy={true} smooth={true} duration={600}>
          <button className="button-17">Order Now</button>
        </Link>
      </p>
      <img src={img1} className="burger-img" />
    </div>
  );
}
