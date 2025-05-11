import React from "react";
import style from "../../Styles/WhyChooseUs.module.css"
import RightImage from "../../assets/Images/choose-us.png";
import WhyChooseUs01 from "../../assets/Images/whyChooseUs01.png";
import WhyChooseUs02 from "../../assets/Images/whyChooseUs02.png";
import WhyChooseUs03 from "../../assets/Images/whyChooseUs03.png";

const WhyChooseUs = () => {
  return (
    <div className={style.whyChooseUsContainer}>
      <div className={style.rightContent}>
        <img src={RightImage} alt="" />
      </div>
      <div className={style.leftContent}>
        <h2>Why People Choose us?</h2>
        <div className={style.deliveryOption}>
          <div className={style.deliveryOptionContent}>
            <div className={style.deliveryOptionContentImage}>
              <img src={WhyChooseUs01} alt="" />
            </div>
            <div className={style.whyChooseUsText}>
              <h3>Convenient and Reliable</h3>
              <p>
                Whether you dine in, take out, or order delivery, our service is
                convenient, fast, and reliable, making mealtime hassle-free.
              </p>
            </div>
          </div>
          <div className={style.deliveryOptionContent}>
            <div className={style.deliveryOptionContentImage}>
              <img src={WhyChooseUs02} alt="" />
            </div>
            <div className={style.whyChooseUsText}>
              <h3>Variety of Options</h3>
              <p>
                From hearty meals to light snacks, we offer a wide range of
                options to suit every taste and craving.
              </p>
            </div>
          </div>
          <div className={style.deliveryOptionContent}>
            <div className={style.deliveryOptionContentImage}>
              <img src={WhyChooseUs03} alt="" />
            </div>
            <div className={style.whyChooseUsText}>
              <h3>Convenient and Reliable</h3>
              <p>
                We us only the Freshest Ingredients, sourced locally whenever
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
