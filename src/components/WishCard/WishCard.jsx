import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";

import { toast } from "react-toastify";

import "./WishCard.css";

function WishCard({ id, txt, img, price }) {
  const { bag, bagID, setBag, setBagID, wishlistID, wishlist, setWishlistID, setWishlist } = useContext(StoreContext);

  function removeFromWishList() {
    setWishlistID([...wishlistID.filter((e) => e !== id)]);
    setWishlist([...wishlist.filter((e) => e[0] !== id)]);
    toast("1 Product removed from Wishlist");
  }
  function moveToBag() {
    if (!bagID.includes(id)) {
      setBagID([...bagID, id]);
      setBag([...bag, [id, txt, img, price]]);
    }
    setWishlistID([...wishlistID.filter((e) => e !== id)]);
    setWishlist([...wishlist.filter((e) => e[0] !== id)]);
    toast("1 Product moved to Bag");
  }
  return (
    <div className="WishCard" id={id}>
      <img className="shirt_img" src={img} alt="" />
      <button className="wishlist-cross-btn" onClick={removeFromWishList}>
        <span className="web_sprite wishlist-cross"></span>
      </button>
      <div className="shirt_info">
        <div className="shirt-txt">{txt}</div>
        <div className="shirt-price">Rs. {price}</div>
      </div>
      <div className="move-btn" onClick={moveToBag}>MOVE TO BAG</div>
    </div>
  );
}

export default WishCard;
