import React, { useState, useEffect } from 'react';
import Euodia from '../Components/Euodia/Euodia';
import FilterButtons from '../Components/FilterButtons/FilterButtons';
import Dishes from '../Components/Dishes/Dishes';
import axios from 'axios';

const Menu = () => {
  const [allDishes, setAllDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://student-food-be.onrender.com/api/dishes');
        setAllDishes(response.data);
        setFilteredDishes(response.data);
      } catch (err) {
        console.error('Error fetching dishes:', err);
        setError('Failed to fetch dishes.');
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  const handleCategoryChange = (category) => {
    setLoading(true);
    setError(null);
    if (category === 'All') {
      setFilteredDishes(allDishes);
    } else {
      const filtered = allDishes.filter(
        (dish) => dish.category?.title?.toLowerCase() === category.toLowerCase()
      );
      setFilteredDishes(filtered);
    }
    setLoading(false);
  };

  return (
    <div>
      <Euodia />
      <FilterButtons onCategoryChange={handleCategoryChange} />
      <Dishes dishes={filteredDishes} showHeader={false} isLoading={loading} error={error} />
    </div>
  );
};

export default Menu;