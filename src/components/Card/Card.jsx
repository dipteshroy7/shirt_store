import React from "react";

import "./Card.css";

const Card = ({ id, img, brand, txt, price }) => {
  function showBtns(id) {
    // console.log(id);
    // console.log(document.getElementById(id));
    document.getElementById(id).style.display = "block";
  }
  function hideBtns(id) {
    // console.log(id);
    // console.log(document.getElementById(id));
    document.getElementById(id).style.display = "none";
  }

  return (
    <div className="Card" onMouseEnter={() => showBtns(id)} onMouseLeave={() => hideBtns(id)}>
      <img className="shirt_img" src={img} alt="" />
      <div className="btns" id={id}>
        <button className="wishlist-btn">
          <span className="web_sprite wishlist-icon"></span>WISHLIST
        </button>
        <button className="addbag-btn">
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
