import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Rating({ value }) {
  const maxValue = 10; 
  const maxRating = 5; 


  const ratingPerStar = maxValue / maxRating;

  // Calculate the number of full stars
  const fullStars = Math.floor(value / ratingPerStar);

  // Calculate the remainder for half stars
  const remainder = value % ratingPerStar;

  return (
    <>
      {[...Array(maxRating)].map((_, index) => (
        <span key={index}>
          {index < fullStars ? (
            <FaStar />
          ) : remainder >= ratingPerStar / 2 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
    </>
  );
}

export default Rating;
