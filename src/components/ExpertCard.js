import React from 'react';
import './ExpertCard.css';

function ExpertCard({ expert }) {
  return (
    <div className="expert-card">
      <img src={expert.img} alt={expert.name} />
      <h3>{expert.name}</h3>
      <p>{expert.specialty}</p>
    </div>
  );
}

export default ExpertCard;
