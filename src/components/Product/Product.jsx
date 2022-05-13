import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";
import { toast } from "react-toastify";

import "./Product.css";

function Product() {
  const { product, bag, setBag, wishlist, setWishlist } = useContext(StoreContext);

  let id = product[0];
  let brandtxt = product[1];
  let img = product[2];
  let price = product[3];

  let brand = "",
    txt = "";
  let bt = [];
  if (brandtxt.includes("Men")) {
    bt = brandtxt.split(" Men ");
    txt = "Men " + bt[1];
  } else if (brandtxt.includes("Women")) {
    bt = brandtxt.split(" Women ");
    txt = "Women " + bt[1];
  } else if (brandtxt.includes("Boys")) {
    bt = brandtxt.split(" Boys ");
    txt = "Boys " + bt[1];
  } else if (brandtxt.includes("Girls")) {
    bt = brandtxt.split(" Girls ");
    txt = "Girls " + bt[1];
  }
  brand = bt[0];

  function addToWishList() {
    if (wishlist.map((e) => e[0]).includes(id)) toast("This Product already in Wishlist");
    else {
      setWishlist([...wishlist, [id, brand + " " + txt, img, price]]);
      toast("1 Product added to Wishlist");
    }
  }
  function addToBag() {
    if (bag.map((e) => e[0]).includes(id)) toast("This Product already in Bag");
    else {
      setBag([...bag, [id, brand + " " + txt, img, price]]);
      toast("1 Product added to Bag");
    }
  }

  return (
    <div className="product_page">
      <div className="product">
        <img className="product_img-bag" src={img} alt="" />
        <div className="product_info">
          <h1 className="product-brand">{brand}</h1>
          <h1 className="product-txt">{txt}</h1>
          <div className="product-price">Rs. {price}</div>
          <div className="product-tax">inclusive of all taxes</div>
          <div className="btns-section">
            <button className="wishlist-btn" onClick={addToWishList}>
              <span className="web_sprite wishlist-icon"></span>WISHLIST
            </button>
            <button className="addbag-btn" onClick={addToBag}>
              <span className="web_sprite addbag-icon"></span>ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
