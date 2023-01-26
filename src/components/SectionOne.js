import React from "react";
import img1 from "../imgs/img.png";
import { Link } from "react-scroll";
export default function SectionOne() {
  return (
    <div className="section-div">
      <p className="header-paragraph">
        <em>Order your Favourite</em>
        <br />
        <span id="sanwich-span">
          <em>Sandwich and Juice</em>
        </span>
        <Link to="sandwich" spy={true} smooth={true} duration={600}>
          <button className="button-17">Order Now</button>
        </Link>
      </p>
      <img src={img1} className="burger-img" alt="Sandwich" />
    </div>
  );
}
