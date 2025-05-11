import React from "react";
import style from "../../Styles/Offer.module.css"; 

const OfferCard = ({ image, title, text }) => {
  return (
    <div className={style.offer}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default OfferCard;
