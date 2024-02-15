import React, { useState } from 'react';
import { imageUrl } from '../Constants/Constants';
import Rating from './Home/Stars';

function Movie({ movie,smallOrNot,showRating }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="poster relative max-h-96 cursor-pointer hover:scale-110"
      style={{ width: smallOrNot }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`${imageUrl + movie.backdrop_path}`} alt="" className="w-full h-full object-cover" />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-35 text-white">
          <h3 className="font-semibold text-center mb-2">{movie.name}</h3>
          {showRating && (
            <div className='flex gap-2 text-star'>
              <Rating value={movie.vote_average} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Movie;
