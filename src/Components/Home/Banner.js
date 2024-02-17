import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {imageUrl } from '../../Constants/Constants';
import axios from '../../axios';
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../../Atoms/ModalAtom';


function Banner(props) {
  const [movie, setMovies] = useState([]);
  const swiperRef = useRef(null)
  const [showModal,setShowModal] = useRecoilState(modalState) 
  const [currentMovie,setCurrentMovie] = useRecoilState(movieState) 

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        const shuffledMovies = response.data.results.sort(() => Math.random() - 0.5); 
        setMovies(shuffledMovies.slice(0, 10)); 
      });
  }, []);

  useEffect(()=>{
    const swiper = swiperRef.current.swiper;
      
    const interval = setInterval(()=>{
      if (swiper !== undefined && swiper !== null) {
        swiper.slideNext();
      }
    },6000)
   
    return () => clearInterval(interval);

  },[swiperRef])

  return (
    <div className="">
      <Swiper
        ref={swiperRef}
        direction="horizontal"
        slidesPerView={1}
        loop={true}
        style={{ height: "100%" }}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {movie.map((movie) => (
          <SwiperSlide key={movie.id} className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
            <img src={imageUrl + movie.backdrop_path} alt="" className="w-full h-full object-cover" />

            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
                {movie.original_title || movie.original_name}
              </h1>
              <p className="text-shadow max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                {movie.overview}
              </p>
              <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black">
                  <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7'/>
                  Play
                </button>
                <button
                  className="bannerButton bg-[gray]/70"
                  onClick={() => {
                    setCurrentMovie(movie)
                    setShowModal(true)
                  }}
                >
                  More Info <IoIosInformationCircle className='h-5 w-5 md:h-8 md:w-8'/>
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
