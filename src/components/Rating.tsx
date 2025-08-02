import React, { useState } from 'react';

interface RatingProps {
  maxRating: number;
  onRate: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ maxRating, onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRate = (rate: number) => {
    setRating(rate);
    onRate(rate);
  };

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleRate(index + 1)}
          className={`p-1 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
          aria-label={`Rate ${index + 1} out of ${maxRating}`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default Rating;
