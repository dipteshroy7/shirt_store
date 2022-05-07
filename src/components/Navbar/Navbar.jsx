import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <span class="web_sprite bag-icon brand-logo"></span>
      <div class="nav-actions">
        <div class="search-bar">
          <div class="search-btn">
            <span class="web_sprite search-icon"></span>
          </div>
          <input type="text" placeholder={"Search for products, brands and more"}></input>
        </div>
        <div class="nav-btn">
          <span class="web_sprite wishlist-icon wish-btn"></span>
          <span class="wish-btn">Wishlist</span>
        </div>
        <div class="nav-btn">
          <span class="web_sprite bag-icon bag-btn"></span>
          <span class="bag-btn">Bag</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
