import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Navbar, Home, Wishlist, Bag, Footer } from "./components";

import { StoreContext } from "./Contexts/StoreContext";

import { data } from "./Assets/Data/shirt_data";

function App() {
  // const [searchedData, setSearchedData] = useState(data);
  const [shirtData, setShirtData] = useState(data);
  const [genderName, setGenderName] = useState("Everyone");
  const [genderShirtData, setGenderShirtData] = useState(data);
  const [filterBrands, setFilterBrands] = useState([]);
  const [selectedFilterBrands, setSelectedFilterBrands] = useState([]);
  const [selectedFilterPrices, setSelectedFilterPrices] = useState([]);
  const [sortBox, setSortBox] = useState();
  const [clearAllFilters, setClearAllFilters] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [bag, setBag] = useState([]);
  const [wishlistID, setWishlistID] = useState([]);
  const [bagID, setBagID] = useState([]);
  const [page, setPage] = useState("home");

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

  useEffect(() => {
    let brands = [];
    let shirts = [...genderShirtData];
    genderShirtData.forEach((data) => {
      let bt = [];
      if (data[1].includes("Men")) bt = data[1].split(" Men ");
      else if (data[1].includes("Women")) bt = data[1].split(" Women ");
      else if (data[1].includes("Boys")) bt = data[1].split(" Boys ");
      else if (data[1].includes("Girls")) bt = data[1].split(" Girls ");
      brands.push(bt[0]);
    });
    setFilterBrands([...new Set(brands)]);

    if (selectedFilterBrands.length > 0) {
      shirts = [];
      genderShirtData.forEach((data) => {
        for (let i = 0; i < selectedFilterBrands.length; i++) {
          if (data[1].includes(selectedFilterBrands[i])) shirts.push(data);
        }
      });
    }
    if (selectedFilterBrands.length === 0) {
      setShirtData(genderShirtData);
    }
    if (selectedFilterPrices.length > 0) {
    }
    if (sortBox === "Price: Low to High") sortLtoH(shirts);
    else if (sortBox === "Price: High to Low") sortHtoL(shirts);
    else setShirtData(shirts);
  }, [genderShirtData, selectedFilterBrands, selectedFilterPrices, sortBox]);

  useEffect(() => {
    if (clearAllFilters === true) {
      setSortBox("Recommended");
      document.querySelectorAll(".sortByDropDown li").forEach((li) => (li.style.fontWeight = "100"));
      document.querySelectorAll("input[type=radio]:checked").forEach((btn) => (btn.checked = false));
      document.querySelectorAll("input[type=checkbox]:checked").forEach((btn) => (btn.checked = false));
      setShirtData([...data]);
      setGenderShirtData([...data]);
      setGenderName("Everyone");
      setSelectedFilterBrands([]);
    }
  }, [clearAllFilters]);

  return (
    <div className="App">
      <StoreContext.Provider
        value={{
          bag,
          page,
          bagID,
          sortBox,
          wishlist,
          shirtData,
          wishlistID,
          genderName,
          filterBrands,
          clearAllFilters,
          genderShirtData,
          selectedFilterBrands,
          selectedFilterPrices,
          setSelectedFilterPrices,
          setSelectedFilterBrands,
          setGenderShirtData,
          setClearAllFilters,
          setFilterBrands,
          setGenderName,
          setWishlistID,
          setShirtData,
          setWishlist,
          setSortBox,
          setBagID,
          setPage,
          setBag,
        }}
      >
        <Navbar />
        <div className="container">
          {page === "home" && <Home />}
          {page === "wishlist" && <Wishlist />}
          {page === "bag" && <Bag />}
        </div>
        <Footer />
        <ToastContainer theme="dark" autoClose={2000} />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
