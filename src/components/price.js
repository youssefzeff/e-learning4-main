import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const courses = [
  { id: 1, title: 'Perfect Diet & Meal Plan - Complete Course', price: 250 },
  { id: 2, title: 'Nutrition: Build Your Perfect Diet & Meal Plan', price: 200 },
  { id: 3, title: 'PHP Beginners - Become a PHP Master', price: 299 },
  { id: 4, title: 'WordPress for Beginners - Master WordPress', price: 150 }
];

const Price = () => {
  const { courseId } = useParams(); // Extract courseId from URL
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(courseId)); // Find course by ID

  const handleAddToCartClick = () => {
    navigate(`/payment/${courseId}`);  // Navigate to Payment page
  };

  return (
    <div className="price-container">
      <h1>{course.title}</h1>
      <p>Price: ${course.price}</p>
      <button onClick={handleAddToCartClick}>Add to Cart</button>
    </div>
  );
};

export default Price;
