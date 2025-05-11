import React, { useState, useEffect } from "react";
import style from "../../Styles/Cart.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import QuantityController from "../QantityController/QuantityController";
const Cart = () => {
  const [cart, setCart] = useState([]);

useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  setCart(storedCart);
}, []);
const updateCartQuantity = (id, newQty) => {
  const updatedCart = cart.map((item) =>
    item.id === id ? { ...item, quantity: newQty } : item
  );
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
    const navigate = useNavigate();
  const handleRemoveItem = (id) => {
  const updatedCart = cart.filter(item => item.id !== id); // remove item by ID
  setCart(updatedCart); // update local state
  localStorage.setItem("cart", JSON.stringify(updatedCart)); // update localStorage
};

    
  return (
    <>
      <div className={style.checkContainer}>
            <p>Products</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
      </div>   
{Array.isArray(cart) && cart.map((item, index) => (
  <div key={item.id || index} className={style.cartItem}>
    <div className={style.leftSide}>
      <FontAwesomeIcon
  icon={faTrash}
  onClick={() => handleRemoveItem(item.id)}
  className={style.deleteIcon}
/>
    <img src={item.imageUrl} alt={item.title} className={style.dishImage}/>
    <p>{item.title}</p>
    </div>
    <p>{item.price}</p>
    <QuantityController
      quantity={item.quantity}
      onChange={(newQty) => updateCartQuantity(item.id, newQty)}
    />
<p>₦{item.price * item.quantity}</p>
  </div>
))}
    <button className={style.returnButton}>Return to Shop</button>
      <div className={style.checkOutContainer}>
        <div className={style.checkOut}>
          <h2>Cart Total</h2>
          <div className={style.cartCheckOut}>
          <div className={style.check}>
            <span className={style.label}>Subtotal:</span>
            <span className={style.value}>55,000</span>
          </div>
          <hr />
          <div className={style.check}>
            <span className={style.label}>Shipping:</span>
            <span className={style.value}>
              <input type="text" placeholder="Enter your address" className={style.cartEmailInput} name="email" autoComplete="email"/>
            </span>
          </div>
          <hr />
          <div className={style.check}>
            <span className={style.label}>Total:</span>
            <span className={style.value}>55,000</span>
          </div>
          </div>
          <button className={style.addButton} onClick={() => navigate('/check')}>Process to checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
