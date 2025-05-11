import React from 'react';
import { useNavigate } from 'react-router-dom';

function DishCard({ dish }) {
    const navigate = useNavigate();
 
    const formattedPrice = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(dish.price);
    
      const handleClick = () => {
        navigate(`/dish/${dish?.slug?.current}`);
      };
  return (
    <div className="bestSellerDishesContainerContent"
    onClick={handleClick} >
      <img src={dish.imageUrl} alt={dish.title} className="dishImage" />
      <div className="categoryPrice">
        <div className="dishName">{dish.title}</div>
        <div className="dishPrice">{formattedPrice}</div>
      </div>
      <div className="descBuy">
        <div className="dishDescription">{dish.description}</div>
        <button  className="buyNow">Buy now</button>
      </div>
    </div>
  );
}

export default DishCard;
