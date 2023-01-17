import React from "react";
import Item from "./Item";

export default function Juices({ data }) {
  return (
    <div>
      <hr className="hr" />
      <div className="sandwichs-container">
        {data.map((item) => {
          return (
            <Item
              img={item.cover}
              name={item.name}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
