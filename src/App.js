import React, { useState, useEffect } from "react";
import "./App.css";

import { Navbar, Filters, ResultBox } from "./components";

import { StoreContext } from "./Contexts/StoreContext";

import { data } from "./Assets/Data/shirt_data";

function App() {
  const [shirtData, setShirtData] = useState(data);
  const [filterBrands, setFilterBrands] = useState([]);
  const [sortBox, setSortBox] = useState();
  const [clearAllFilters, setClearAllFilters] = useState(true);

  useEffect(() => {
    let brands = [];
    shirtData.forEach((data) => {
      let bt = [];
      if (data[1].includes("Men")) bt = data[1].split(" Men ");
      else if (data[1].includes("Women")) bt = data[1].split(" Women ");
      else if (data[1].includes("Boys")) bt = data[1].split(" Boys ");
      else if (data[1].includes("Girls")) bt = data[1].split(" Girls ");
      brands.push(bt[0]);
    });
    setFilterBrands([...new Set(brands)]);
  }, [shirtData]);

  useEffect(() => {
    if (clearAllFilters === true) {
      setSortBox("Recommended");
      document.querySelectorAll(".sortByDropDown li").forEach((li) => (li.style.fontWeight = "100"));
      document.querySelectorAll("input[type=radio]:checked").forEach((btn) => (btn.checked = false));
      setShirtData([...data]);
    }
  }, [clearAllFilters]);

  return (
    <div className="App">
      <StoreContext.Provider
        value={{ shirtData, setShirtData, filterBrands, sortBox, setSortBox, clearAllFilters, setClearAllFilters }}
      >
        <Navbar />
        <div className="container">
          <div className="home_page">
            <Filters />
            <ResultBox />
          </div>
        </div>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
