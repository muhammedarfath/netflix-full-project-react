import React, { useState } from 'react';
import { imageUrl } from '../Constants/Constants';

function Movie({ movie,smallOrNot, }) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(movie)
  return (
    <div
      className="poster relative max-h-96 cursor-pointer hover:scale-110"
      style={{ width: smallOrNot }}

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`${imageUrl + movie.backdrop_path}`} alt="" className="w-full h-full object-cover" />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white">
          <h3 className="font-semibold text-center">{movie.name}</h3>
        </div>
      )}
    </div>
  );
}

export default Movie;
