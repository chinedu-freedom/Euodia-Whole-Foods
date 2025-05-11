import React from 'react';
import DishCard from '../DishCard/DishCard';
import style from '../../Styles/Dishes.module.css';

function Dishes({
  dishes = [], // Expect an array of dishes as a prop
  title,
  description,
  showHeader = true,
  isLoading = false, // Prop to indicate loading state
  error = null,     // Prop to indicate an error occurred
  number,
}) {
  if (isLoading) return <p>Loading dishes...</p>;
  if (error) return <p>Error loading dishes: {error}</p>;
  if (!dishes.length) return <p>No dishes found.</p>;

  return (
    <div className={style.bestSellerDishesContainer}>
      {showHeader && (
        <div className={style.bestSellerDishesContainerHead}>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
      )}
      <div className="bestSellerDishesContainerContentContainer">
        {dishes?.slice(0,number).map((dish) => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default Dishes;