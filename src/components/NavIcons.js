import React from "react";
import { Link } from "react-scroll";

export default function NavIcons() {
  return (
    <nav id="nav-div">
      <ul id="nav-icons">
        <li>
          <Link to="sandwich" spy={true} smooth={true} duration={600}>
            Sandwiches
          </Link>
        </li>
        <li>
          <Link to="juices" spy={true} smooth={true} duration={600}>
            Juices
          </Link>
        </li>
      </ul>
    </nav>
  );
}
