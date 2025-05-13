import React from 'react';
import ExpertCard from '../components/ExpertCard';
import './HomePage.css';

function HomePage() {
  const experts = [
    { name: 'Sophie Martin', specialty: 'Mathématiques', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Jean Dupont', specialty: 'Physique', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Emma Bernard', specialty: 'Informatique', img: 'https://randomuser.me/api/portraits/women/47.jpg' },
  ];

  return (
    <div className="home-container">
      <h1>Nos Experts</h1>
      <div className="experts">
        {experts.map((expert, index) => (
          <ExpertCard key={index} expert={expert} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
