import React from 'react';
import './Card.css';

function Card({ title, date, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <p>{description}</p>
      <button onClick={() => alert(`More info about ${title}`)}>Learn More</button>
    </div>
  );
}

export default Card;
