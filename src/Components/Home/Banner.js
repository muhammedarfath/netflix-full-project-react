import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { API_KEY, imageUrl } from '../../Constants/Constants';
import axios from '../../axios';
import FlexMovieItems from '../FlexMovieItems';
import { Link} from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaPlay } from "react-icons/fa6";
import { movies } from '../../urls'

function Banner() {
  const [movie, setMovies] = useState([]);
  const swiperRef = useRef(null)


  
  useEffect(() => {
    axios
      .get(movies)
      .then((response) => {
        const shuffledMovies = response.data.results.sort(() => Math.random() - 0.5); 
        setMovies(shuffledMovies.slice(0, 10)); 
      });
  }, []);


  useEffect(()=>{
    const swiper = swiperRef.current.swiper;
      
    const interval =setInterval(()=>{
      if (swiper !== undefined && swiper !== null) {
        swiper.slideNext();
      }
    },4000)
   
    return () => clearInterval(interval);

  },[swiperRef])



  return (
    <div className="relative w-full">
      <Swiper
        ref={swiperRef}
        direction="horizontal"
        slidesPerView={1}
        loop={true}
        style={{ height: "100%" }}
        speed={1000}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {movie.map((movie) => (
          <SwiperSlide key={movie.id} className="relative rounded overflow-hidden">
            <img src={imageUrl + movie.backdrop_path} alt="" className="w-full h-full object-cover" />
            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {movie.original_title}
              </h1>
              < div className="flex gap-5 items-center text-dryGray">
                <FlexMovieItems movie={movie}/>
              </div>
              <div className='flex gap-5 items-center'>
                <Link to={`/movie/${movie.title}`} className="flex bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs gap-2 items-center">
                <FaPlay/>
                Play
                </Link>
                <button className="bg-white hover:text-main transitions text-white px-4 py-3 rounded font-medium sm:text-sm text-sm bg-opacity-30">
                  <FaHeart/>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
         
      </Swiper>

    </div>
  );
}

export default Banner;
