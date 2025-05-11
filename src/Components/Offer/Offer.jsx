import React from "react";
import style from "../../Styles/Offer.module.css"
import OfferCard from "./OfferCard";
import firstOffer from "../../assets/Images/first-offer.png";
import secondOffer from "../../assets/Images/second-offer.png";
import thirdOffer from "../../assets/Images/third-offer.png";
import fourthOffer from "../../assets/Images/fourth-offer.png";

const offerData = [
  {
    image: firstOffer,
    title: "Quality Food",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text",
  },
  {
    image: secondOffer,
    title: "Speed Delivery",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text",
  },
  {
    image: thirdOffer,
    title: "Affordable Pricing",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text",
  },
  {
    image: fourthOffer,
    title: "Quality Packaging",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text",
  },
];

const Offers = () => {
  return (
    <div className={style.offerContent}>
      {offerData.map((offer, index) => (
        <OfferCard
          key={index}
          image={offer.image}
          title={offer.title}
          text={offer.text}
        />
      ))}
    </div>
  );
};

export default Offers;
