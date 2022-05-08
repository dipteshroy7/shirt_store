import React from "react";

import "./Card.css";

const Card = ({ img, brand, txt, price }) => {
  return (
    <div className="Card">
      <img className="shirt_img" src={img} alt="" />
      <div className="shirt_info">
        <div className="shirt-brand">{brand}</div>
        <div className="shirt-txt">{txt}</div>
        <div className="shirt-price">Rs. {price}</div>
      </div>
    </div>
  );
};

export default Card;
