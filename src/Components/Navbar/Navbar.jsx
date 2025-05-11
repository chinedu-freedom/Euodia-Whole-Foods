// import React, { useState, useEffect } from "react";
import logo from "../../assets/Images/Euodia-logo.png";
import style from "../../Styles/Navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Importing the shopping cart icon
import { FaLock } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate()
  // const [cartCount, setCartCount] = useState(0);

  // Load cart count from localStorage
  // useEffect(() => {
  //   const updateCartCount = () => {
  //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //     setCartCount(cart.length);
  //   };
  //   updateCartCount();
  //   // Optional: listen for localStorage updates across tabs/windows
  //   window.addEventListener("storage", updateCartCount);
  //   return () => {
  //     window.removeEventListener("storage", updateCartCount);
  //   };
  // }, []);

  return (
    <div className={style.navbar}>
      <img src={logo} alt="App Logo" />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/our-menu">
          <li>Our Menu</li>
        </NavLink>
        <NavLink to="/contact-us">
          <li>Contact Us</li>
        </NavLink>
      </ul>
      <div className={style.rightNav}>
        <FaLock />
        <Link to="/cart">
          <FaShoppingCart size={18} />
          {/* <span
            className={style.cartCount}
            style={{ visibility: cartCount > 0 ? "visible" : "hidden" }}
          >
            {cartCount}
          </span> */}
        </Link>
        <button className={style.signUpButton} onClick={() => navigate('/sign-up')}>Sign In</button>
        </div>
    </div>
  );
};

export default Navbar;
