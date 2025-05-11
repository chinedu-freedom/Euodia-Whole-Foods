import React from "react";
import style from "../../Styles/NotFound.module.css";
import sadImage from "../../assets/Images/sad.png";

const NotFound = () => {
  return (
    <>
      <div className={style.notFound}>
        <div className={style.notFoundContainer}>
          <img src={sadImage} alt="" />
          <h2>404 Not Found</h2>
          <p className={style.notice}>
            Your visited page not found. You may go home page.
          </p>
          <button className={style.return}>Return to homepage</button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
