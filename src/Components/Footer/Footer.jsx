import React from "react";
import style from "../../Styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerHead}>
        <div>
          <h3>
            Join Our <span className={style.newsLetter}>Newsletter</span>
          </h3>
          <p>
            Be the first to know about our latest updates, exclusive offers, and
            more.
          </p>
        </div>
        <div className={style.emailSub}>
          <input
            type="email"
            className={style.email}
            placeholder="Enter your email address"
            name="email"
            autoComplete="email"
          />
          <button className={style.subscribe}>Subscribe</button>
        </div>
      </div>
      <hr className={style.footerHr} />
      <div className={style.footerMiddle}>
        <div className={style.leftContent}>
          <h3>Help</h3>
          <ul>
            <li>Customer Support</li>
            <li>Email Support</li>
            <li>Delivery Services</li>
          </ul>
        </div>
        <div className={style.rightContent}>
          <h3>About</h3>
          <ul>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <hr className={style.footerHr} />
      <div className={style.footerToe}>
        <div className={style.toeLeftContent}>
          <ul className={style.toeLeftContentUl}>
            <li>Privacy</li>
            <li>Terms of use</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div className={style.toeRightContent}>
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved Euodia Whole
            Foods
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
