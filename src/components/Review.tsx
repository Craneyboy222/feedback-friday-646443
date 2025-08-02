import React from 'react';

interface ReviewProps {
  reviewer: string;
  rating: number;
  comment: string;
}

const Review: React.FC<ReviewProps> = ({ reviewer, rating, comment }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm">
      <h4 className="font-medium">{reviewer}</h4>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`icon-star ${i < rating ? 'text-yellow-500' : 'text-gray-400'}`} aria-hidden="true"></span>
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-700">{comment}</p>
    </div>
  );
};

export default Review;