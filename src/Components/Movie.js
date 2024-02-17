import React, { useState } from 'react';
import { imageUrl } from '../Constants/Constants';
import Rating from './Home/Stars';
import { useRecoilState } from 'recoil';
import { modalState } from '../Atoms/ModalAtom';
import { movieState } from '../Atoms/ModalAtom';

function Movie({ movie,showRating,largeornot }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal,setShowModal] = useRecoilState(modalState)
  const [currentMovie,setCurrentMovie] = useRecoilState(movieState) 
  return (
    <div className={`relative h-28 min-w-[200px]
      cursor-pointer transition duration-200
      ease-out md:h-36 md:min-w-(260px) md:hover:scale-105`}>
      <img src={`${imageUrl + movie.backdrop_path }`}
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
       alt="" 
       className="rounded-sm object-cover md:rounded" 
       layout="fill"/>
      {/* {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-35 text-white">
          <h3 className="font-semibold text-center mb-2">{movie.name}</h3>
          {showRating && (
            <div className='flex gap-2 text-star'>
              <Rating value={movie.vote_average} />
            </div>
          )}
        </div>
      )} */}
    </div>
  );
}

export default Movie;
