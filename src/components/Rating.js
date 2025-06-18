import React, { useState } from 'react';
import './Rating.css';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = new Array(5).fill(0);

  return (
    <div className="rating-container">
      <h2>Rate Our Service</h2>
      <div className="stars">
        {stars.map((_, index) => {
          const isActive = hover ? index < hover : index < rating;
          return (
            <span
              key={index}
              className={isActive ? 'star colored' : 'star unColor'}
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(index + 1)}
              role="button"
              aria-label={`Rate ${index + 1} star`}
              tabIndex={0}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <p className="rating-text">{rating > 0 ? `You rated: ${rating}/5` : 'Click a star to rate!'}</p>
    </div>
  );
};

export default Rating;
