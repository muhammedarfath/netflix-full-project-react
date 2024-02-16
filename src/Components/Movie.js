import React, { useState } from 'react';
import { imageUrl } from '../Constants/Constants';
import Rating from './Home/Stars';

function Movie({ movie,showRating,largeornot }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`relative h-28 min-w-[200px]
      cursor-pointer transition duration-200
      ease-out md:h-36 md:min-w-(260px) md:hover:scale-105`}>
      <img src={`${imageUrl + movie.backdrop_path || imageUrl + movie.poster_path}`} alt="" className="rounded-sm object-cover md:rounded" layout="fill"/>
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
