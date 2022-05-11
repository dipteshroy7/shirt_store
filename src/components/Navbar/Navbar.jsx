import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";

import "./Navbar.css";

function Navbar() {
  const { bagID, wishlistID, setPage, setClearAllFilters } = useContext(StoreContext);

  function navHome() {
    setPage("home");
    setClearAllFilters(true);
  }
  function navWishlist() {
    setPage("wishlist");
    setClearAllFilters(true);
  }
  function navBag() {
    setPage("bag");
    setClearAllFilters(true);
  }

  return (
    <nav>
      <span className="web_sprite brand-logo" onClick={navHome}></span>
      <div className="nav-actions">
        <div className="search-bar">
          <div className="search-btn">
            <span className="web_sprite search-icon"></span>
          </div>
          <input type="text" placeholder={"Search for products, brands and more"}></input>
        </div>
        <div className="nav-btn" onClick={navWishlist}>
          {wishlistID.length > 0 && <span className="number-bubble">{wishlistID.length}</span>}
          <span className="web_sprite wishlist-icon wish-btn"></span>
          <span className="wish-btn">Wishlist</span>
        </div>
        <div className="nav-btn" onClick={navBag}>
          {bagID.length > 0 && <span className="number-bubble">{bagID.length}</span>}
          <span className="web_sprite bag-icon bag-btn"></span>
          <span className="bag-btn">Bag</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
