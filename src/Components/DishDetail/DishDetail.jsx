import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../../Styles/DishDetail.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Dishes from "../Dishes/Dishes";
import axios from "axios"; // Import axios for fetching
import QuantityController from "../QantityController/QuantityController";

const DishDetail = () => {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [otherDishes, setOtherDishes] = useState([]);
  const [loadingOtherDishes, setLoadingOtherDishes] = useState(true);
  const [errorOtherDishes, setErrorOtherDishes] = useState(null);

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const res = await fetch(
          `https://student-food-be.onrender.com/api/dishes/${slug}`
        );
        if (!res.ok) throw new Error("Failed to fetch dish");
        const data = await res.json();
        setDish(data);
      } catch (err) {
        console.error("Error fetching dish:", err);
      }
    };

    fetchDish();
  }, [slug]);

  useEffect(() => {
    const fetchOtherDishes = async () => {
  setLoadingOtherDishes(true);
  setErrorOtherDishes(null);
  try {
    const res = await axios.get('https://student-food-be.onrender.com/api/dishes');
    const data = res.data.filter((otherDish) => {
      // Safely access slug.current
      const otherDishSlug = otherDish.slug && typeof otherDish.slug === 'object' && otherDish.slug.current;
      return otherDishSlug !== slug;
    });
    setOtherDishes(data);
  } catch (err) {
    console.error("Error fetching other dishes:", err);
    setErrorOtherDishes("Failed to load other dishes.");
  } finally {
    setLoadingOtherDishes(false);
  }
};

    if (dish) { // Fetch other dishes after the current dish details are loaded
      fetchOtherDishes();
    }
  }, [slug, dish]); // Re-fetch if slug or the main dish changes

  // const handleQuantityChange = (amount) => {
  //   setQuantity((prev) => Math.max(1, prev + amount));
  // };

  const handleOrder = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.slug === slug);

    if (existingItem) {
      if (existingItem.quantity !== quantity) {
        existingItem.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } else if (dish) {
      cart.push({
        id: dish._id,
        slug: slug,
        title: dish.title,
        price: dish.price,
        imageUrl: dish.imageUrl,
        quantity,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  if (!dish) return <div>Loading dish details...</div>;

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(dish.price);

  return (
    <>
      <div className={style.dishContent}>
        <div className={style.dishImage}>
          <img
            src={dish.imageUrl}
            alt={dish.title}
            className={style.dishImage}
          />
        </div>
        <div>
          <div>
            {dish && <h2 className={style.dishTitle}>{dish.title.toUpperCase()}</h2>}
            <p className={style.description}>{dish.description}</p>
          </div>
          <p className={style.price}>{formattedPrice}</p>
          {/* <div className={style.actionButtons}>
            <FontAwesomeIcon
              icon={faMinus}
              onClick={() => handleQuantityChange(-1)}
              className={style.number}
            />
            <input
              type="text"
              value={String(quantity).padStart(2, '0')}
              readOnly
              className={style.quantityValue}
              name="text"
            />
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => handleQuantityChange(1)}
              className={style.number}
            />
            <button className={style.orderBtn} onClick={handleOrder}>ORDER</button>
          </div> */}
          <QuantityController
  quantity={quantity}
  onChange={setQuantity}
  showOrderButton={true}
  onOrder={handleOrder}
/>
{/* <QuantityController */}
        </div>
      </div>
      <Dishes
        title="Other dishes include"
        dishes={otherDishes}
        isLoading={loadingOtherDishes}
        error={errorOtherDishes}
        showHeader={true} // Or false, depending on your design
      />
    </>
  );
};

export default DishDetail;