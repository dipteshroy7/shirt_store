import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";

import "./Home.css";

import { Filters, ResultBox } from "../../components";

function Home() {
  const { shirtData, genderName } = useContext(StoreContext);
  return (
    <div className="home_page">
      <div className="home_heading">
        Shirts for {genderName}
        <span className="item-count"> - {shirtData.length} {shirtData.length === 1 ? "item" : "items"}</span>
      </div>
      <div className="home_body">
        <Filters />
        <ResultBox />
      </div>
    </div>
  );
}

export default Home;
