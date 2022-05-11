import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";
import { toast } from "react-toastify";

import "./BagCard.css";

function BagCard({ id, brand, txt, img, price }) {
  const { bag, setBag } = useContext(StoreContext);

  function removeFromBag() {
    setBag([...bag.filter((e) => e[0] !== id)]);
    toast("1 Product removed from Bag");
  }

  return (
    <div className="BagCard">
      <img className="shirt_img-bag" src={img} alt="" />
      <button className="bag-cross-btn" onClick={removeFromBag}>
        <span className="web_sprite bag-cross"></span>
      </button>
      <div className="shirt_info">
        <div className="shirt-brand">{brand}</div>
        <div className="shirt-txt">{txt}</div>
        <div className="shirt-price">Rs. {price}</div>
      </div>
    </div>
  );
}

export default BagCard;
