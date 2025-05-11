import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../../Styles/FilterButtons.module.css';

const FilterButtons = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://student-food-be.onrender.com/api/category')
      .then((res) => {
        setCategories(res.data?.categories || []);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
      });
  }, []);

  const handleFilter = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className={style.coursesContainer}>
      <div className={style.courses}>
        <button onClick={() => handleFilter('All')}>All</button>
        {categories?.map((cat) => (
          <button key={cat._id} onClick={() => handleFilter(cat.title)}>
            {cat.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;