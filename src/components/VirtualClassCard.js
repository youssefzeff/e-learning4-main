import React, { useState } from 'react';
import './VirtualClassCard.css';

const VirtualClassCard = ({ vc }) => {
  const [hasJoined, setHasJoined] = useState(false); // State to track if the class is joined

  const handleJoinClick = () => {
    setHasJoined(true); // Mark as joined when button is clicked
  };

  return (
    <div className="virtual-class-card">
      <div className="virtual-class-header">
        <div className="instructor-info">
          <img src={vc.instructorImage} alt={vc.instructor} />
          <div>
            <h3>{vc.title}</h3>
            <p className="instructor-name">with {vc.instructor}</p>
          </div>
        </div>
        <span className={`status-tag ${vc.status.toLowerCase()}`}>{vc.status}</span>
      </div>
      <p>{vc.description}</p>
      <p><strong>Date:</strong> {vc.date}</p>
      <p><strong>Time:</strong> {vc.time} ({vc.duration})</p>
      <p><strong>Platform:</strong> {vc.platform}</p>
      
      {vc.status !== "Ended" && (
        <button 
          className="join-class-btn" 
          onClick={handleJoinClick}
          disabled={hasJoined} // Disable the button after joining
        >
          {hasJoined ? "Joined" : "Join Class"}
        </button>
      )}
    </div>
  );
};

export default VirtualClassCard;
