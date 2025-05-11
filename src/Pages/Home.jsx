import React, { useState, useEffect } from 'react';
import axios from 'axios';
import food from '../assets/Images/food.png';
import DashboardImage from '../assets/Images/hero-image.png';
import style from '../Styles/Home.module.css';
import Offer from "../Components/Offer/Offer";
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';
import Euodia from '../Components/Euodia/Euodia';
import Dishes from '../Components/Dishes/Dishes';

const Home = () => {
  const [bestSellerDishes, setBestSellerDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestSellerDishes = async () => {
      setLoading(true);
      setError(null);
      try {
        // Adjust this API endpoint to fetch ONLY best seller dishes
        const response = await axios.get('https://student-food-be.onrender.com/api/dishes?isBestSeller=true');
        setBestSellerDishes(response.data);
      } catch (err) {
        console.error("Error fetching best seller dishes:", err);
        setError("Failed to load best seller dishes.");
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellerDishes();
  }, []);

  return (
    <>
      <div className="container">
        <div className={style.hero}>
          <div>
        <div className={style.come}>
          <h2>Come For The</h2>
          <img src={food} alt='food-icon' className={style.food} />
        </div>
        <h2 className={style.stay}>Stay For The Memory</h2>
        <p className={style.foodIntro}>
          Food is what we eat to stay alive and healthy. It comes in many
          different forms and flavors, from fruits and vegetables to meats and
          grains.
        </p>
        <button className={style.order}>Order Now</button>
      </div>
      <div className={style.introRightContent}>
        <img src={DashboardImage} alt='hero-image' className={style.introLeftContent} />
      </div>
       </div>
        <Offer />
        <WhyChooseUs />
        <Dishes
          title="Our Best Seller Dishes"
          description="Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing."
          dishes={bestSellerDishes}
          isLoading={loading}
          error={error}
          number={3}
        />
        <Euodia />
      </div>
    </>
  );
};

export default Home;