import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";
import { toast } from "react-toastify";

import "./Card.css";

const Card = ({ id, brand, txt, img, price }) => {
  const { bagID, wishlistID, setBagID, setWishlistID, bag, wishlist, setBag, setWishlist } = useContext(StoreContext);

  function showBtns() {
    document.getElementById(id).style.display = "block";
  }
  function hideBtns() {
    document.getElementById(id).style.display = "none";
  }
  function addToWishList() {
    if (wishlistID.includes(id)) toast("This Product already in Wishlist");
    else {
      setWishlistID([...wishlistID, id]);
      setWishlist([...wishlist, [id, brand + " " + txt, img, price]]);
      toast("1 Product added to Wishlist");
    }
  }
  function addToBag() {
    if (bagID.includes(id)) toast("This Product already in Bag");
    else {
      setBagID([...bagID, id]);
      setBag([...bag, [id, brand + " " + txt, img, price]]);
      toast("1 Product added to Bag");
    }
  }

  return (
    <div className="Card" onMouseEnter={showBtns} onMouseLeave={hideBtns}>
      <img className="shirt_img" src={img} alt="" />
      <div className="btns" id={id}>
        <button className="wishlist-btn" onClick={addToWishList}>
          <span className="web_sprite wishlist-icon"></span>WISHLIST
        </button>
        <button className="addbag-btn" onClick={addToBag}>
          <span className="web_sprite addbag-icon"></span>ADD TO BAG
        </button>
      </div>
      <div className="shirt_info">
        <div className="shirt-brand">{brand}</div>
        <div className="shirt-txt">{txt}</div>
        <div className="shirt-price">Rs. {price}</div>
      </div>
    </div>
  );
};

export default Card;
