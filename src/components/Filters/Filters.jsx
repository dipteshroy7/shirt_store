import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";

import { data } from "../../Assets/Data/shirt_data";

import "./Filters.css";

function Filters() {
  const {
    setShirtData,
    filterBrands,
    setGenderShirtData,
    selectedFilterBrands,
    setSelectedFilterBrands,
    clearAllFilters,
    setClearAllFilters,
    sortBox,
  } = useContext(StoreContext);

  function sortLtoH(filter_data) {
    let sortedList = filter_data;
    sortedList.sort((a, b) => a[3] - b[3]);
    setShirtData(sortedList);
  }
  function sortHtoL(filter_data) {
    let sortedList = filter_data;
    sortedList.sort((a, b) => b[3] - a[3]);
    setShirtData(sortedList);
  }

  function setGender(gender) {
    setClearAllFilters(false);
    setSelectedFilterBrands([]);
    document.querySelectorAll("input[type=checkbox]:checked").forEach((btn) => (btn.checked = false));
    let filter_data = data.filter((d) => d[1].includes(gender));
    setGenderShirtData(filter_data);
    if (sortBox === "Price: Low to High") sortLtoH(filter_data);
    else if (sortBox === "Price: High to Low") sortHtoL(filter_data);
    else setShirtData(filter_data);
  }

  function setBrands(brand) {
    if (document.getElementById(brand).checked) {
      setSelectedFilterBrands([...selectedFilterBrands, brand]);
    } else {
      let clone = [...selectedFilterBrands];
      let temp = [];
      for (let i = 0; i < clone.length; i++) {
        if (clone[i] !== brand) {
          temp.push(clone[i]);
        }
      }
      setSelectedFilterBrands(temp);
    }
  }

  let brandfilters = filterBrands.map((brand, index) => {
    return (
      <>
        <input
          key={brand + index}
          type="checkbox"
          className="filter-items"
          id={brand}
          value={brand}
          onClick={() => setBrands(brand)}
        />
        <label htmlFor={brand}>{brand}</label>
        <br />
      </>
    );
  });

  return (
    <div className="Filters">
      <div key="askncjxi2" className="filter-containers">
        <span style={{ fontSize: "17px", fontWeight: 900 }}>FILTERS</span>
        {!clearAllFilters && (
          <span className="filter-clearAllBtn" onClick={() => setClearAllFilters(true)}>
            CLEAR ALL
          </span>
        )}
      </div>
      <div key="scjh8issc" className="filter-containers" style={{ fontWeight: 600 }}>
        <label key="akjncknd" htmlFor="Men" onClick={() => setGender("Men")}>
          <input type="radio" className="filter-items" id="Men" name="gender" /> Men
        </label>
        <br />
        <label key="skjduis" htmlFor="Women" onClick={() => setGender("Women")}>
          <input type="radio" className="filter-items" id="Women" name="gender" /> Women
        </label>
        <br />
        <label key="ctdgcddc" htmlFor="Boys" onClick={() => setGender("Boys")}>
          <input type="radio" className="filter-items" id="Boys" name="gender" /> Boys
        </label>
        <br />
        <label key="oiuyttrv" htmlFor="Girls" onClick={() => setGender("Girls")}>
          <input type="radio" className="filter-items" id="Girls" name="gender" /> Girls
        </label>
      </div>
      <div key="scj7acsjd" className="filter-containers">
        <div className="filter-title">BRAND</div>
        {brandfilters}
      </div>
      <div key="scjs9kjdn" className="filter-containers">
        <div className="filter-title">PRICE</div>
      </div>
    </div>
  );
}

export default Filters;
