import React from "react";
import Header from "./Header";
import Juices from "./Juices";
import Sandwiches from "./Sandwiches";
import SectionOne from "./SectionOne";

export default function HomePage({ sandwichData, juicesData }) {
  return (
    <div className="App">
      <SectionOne />
      <Sandwiches data={sandwichData} />
      <Juices data={juicesData} />
    </div>
  );
}
