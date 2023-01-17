import React from "react";
import Item from "./Item";

export default function Sandwiches({ data }) {
  return (
    <div className="sandwichs-container" id="sandwich">
      {data.map((item) => {
        return (
          <div>
            <Item
              img={item.cover}
              name={item.name}
              price={item.price}
              id={item.id}
            />
          </div>
        );
      })}
    </div>
  );
}
