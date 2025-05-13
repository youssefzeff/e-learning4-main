import React from 'react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Perfect Diet & Meal Plan - Complete Course',
    level: 'Expert',
    price: 250,
    image: 'https://via.placeholder.com/150', // Example placeholder image
  },
  {
    id: 2,
    title: 'Nutrition: Build Your Perfect Diet & Meal Plan',
    level: 'All Levels',
    price: 200,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'PHP Beginners - Become a PHP Master',
    level: 'Intermediate',
    price: 299,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'WordPress for Beginners - Master WordPress',
    level: 'Beginner',
    price: 150,
    image: 'https://via.placeholder.com/150',
  }
];

const Courses = () => {
  const navigate = useNavigate();  // useNavigate hook to navigate to different pages

  const handleBuyClick = (courseId) => {
    navigate(`'./components/price/'${courseId}`);
    
  };

  return (
    <div className="courses-container">
      <h1>Featured Courses</h1>
      <div className="courses">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h2>{course.title}</h2>
            <p>{course.level}</p>
            <button onClick={() => handleBuyClick(course.id)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
