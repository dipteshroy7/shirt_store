import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <span className="web_sprite brand-logo"></span>
      <div className="nav-actions">
        <div className="search-bar">
          <div className="search-btn">
            <span className="web_sprite search-icon"></span>
          </div>
          <input type="text" placeholder={"Search for products, brands and more"}></input>
        </div>
        <div className="nav-btn">
          <span className="web_sprite wishlist-icon wish-btn"></span>
          <span className="wish-btn">Wishlist</span>
        </div>
        <div className="nav-btn">
          <span className="web_sprite bag-icon bag-btn"></span>
          <span className="bag-btn">Bag</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
