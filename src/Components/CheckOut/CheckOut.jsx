import React from "react";
import style from "../../Styles/CheckOut.module.css";
import { useNavigate } from "react-router-dom";
const CheckOut = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.checkout}>
        <div className={style.checkoutContainer}>
          <h1>Checkout</h1>
          <div className={style.checkoutContainerContent}>
            <div className={style.checkoutDetail}>
              <span className={style.label}>Order Id: </span>
              <span className={style.value}>2933</span>
            </div>
            <div className={style.checkoutDetail}>
              <span className={style.label}>Date: </span>
              <span className={style.value}>99939</span>
            </div>
            <div className={style.checkoutDetail}>
              <span className={style.label}>Total: </span>
              <span className={style.value}>309</span>
            </div>
            <span className={style.gratitude}>
              Thank you for your order, please click the link below to check
              your order
            </span>
          </div>
          <button className={style.checkOutButton}>
            {" "}
            <a
              onClick={() => {
                navigate("/check");
              }}
            >
              check my order
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
