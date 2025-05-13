import React from 'react';
import './ClassCard.css';

function ClassCard({ classItem, onDelete, onClick }) {
  return (
    <div className="class-card" onClick={() => onClick(classItem)}>
      <h3>{classItem.title}</h3>
      <p>{classItem.description}</p>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation(); // Prevent modal from opening
          onDelete(classItem.id);
        }}
      >
        Supprimer
      </button>
    </div>
  );
}

export default ClassCard;
