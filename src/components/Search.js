import React from "react";

export default function Search() {
  return (
    <div id="search-div">
      <input type="text" placeholder="Search" id="search" />

      <select>
        <option value="none" disabled>
          Category
        </option>
        <option>Sandwiches</option>
        <option>Juices</option>
      </select>
    </div>
  );
}
