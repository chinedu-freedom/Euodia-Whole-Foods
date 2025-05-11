import React from "react";
import style from "../../Styles/Check.module.css";
import { useNavigate } from "react-router-dom";

const Check = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className={style.checkOutContainer}>
        <form className={style.clientForm}>
          <div className={style.clientInfo}>
            <div>
              <label htmlFor="firstName" className={style.clientFormLabel}>
                First Name
              </label>
              <input id="firstName" type="text" name="firstName" />
            </div>
            <div>
              <label htmlFor="address" className={style.clientFormLabel}>
                Street Address
              </label>
              <input id="address" type="text" name="address" autoComplete="address" />
            </div>
            <div>
              <label htmlFor="apartment" className={style.clientFormLabel}>
                Apartment, Floor (Optional)
              </label>
              <input id="apartment" type="text" name="apartment" autoComplete="apartment"/>
            </div>
            <div>
              <label htmlFor="city" className={style.clientFormLabel}>
                Town/City
              </label>
              <input id="city" type="text" name="city" autoCapitalize="city"/>
            </div>
            <div>
              <label htmlFor="phone" className={style.clientFormLabel}>
                Phone Number
              </label>
              <input id="phone" type="tel" name="phone" autoComplete="tel"/>
            </div>
            <div>
              <label htmlFor="email" className={style.clientFormLabel}>
                Email Address
              </label>
              <input id="email" type="email" name="email" autoComplete="email"/>
            </div>
          </div>
        </form>

        <div className={style.orderDetails}></div>
        <div className={style.orderDetailsContent}>
        <div className={style.orderReview}>
            <div className={style.orderReviewDetails}>
            <p>Shipping:</p>
              <input type="text" placeholder="Enter your address" name="checkbox" className={style.checkOutEmailInput}/>
              </div>
              <div className={style.orderReviewDetails}>
            <p>Service Fee:</p>
            <p>550</p>
            </div>
            <div className={style.orderReviewDetails}>
            <p>VAT:</p>
            <p>550</p>
            </div>
        </div>
        <p>Enjoy faster order confirmation by paying using bank transfer</p>
        <button className={style.payButton}>Click to Pay</button>
        <p>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
        <div className= {style.terms}>
            <input type="checkbox" name="checkbox" autoComplete="none"/>
            <p>I HAVE READ AND AGREE TO THE TERMS AND CONDITIONS</p>
        </div>
        <button className={style.placeOrder} onClick={() => navigate('/check-out')}>Place Order</button>
      </div>
      </div>
      <div>
        <div className={style.autoSave}>
            <input type="checkbox" name="checkox"  autoComplete="none"/>
            <p>Save this information for faster checkout next time</p>
        </div>
        <div className={style.changeLocation}>
            <input type="radio" name="radio"  autoComplete="none"/>
            <p>Ship to a different location?</p>
        </div>
        <div>
            <p>ORDER NOTE (OPTIONAL)</p>
            <textarea name="note" id="orderNote" cols={95} rows={6} placeholder="Special notes about your order. e.g special notes for your delivery" className={style.orderReviewTextarea}></textarea>
        </div>
      </div>
    </>
  );
};

export default Check;
