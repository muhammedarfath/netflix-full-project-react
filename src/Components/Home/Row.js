import React, { useEffect, useRef, useState } from 'react'
import Titles from '../Titles'
import axios from '../../axios'
import Movie from '../Movie'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function RowMovies({title,url,isLarge,showTopRating,icon}) {
    const [movies, setMovies] = useState([])
    const rowRef = useRef(null)
    const [isMoved,setIsMoved] = useState(false)


    useEffect(() => {
        axios.get(url).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            alert('Network error')
        })
    }, [])


    const handleClick = (direction) => { 
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
    
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    }
    

    return (

        <div className="h-40 space-y-0.5 md:space-y-2 ">
            <Titles title={title} Icon={icon}/>
            <div className='group relative md:-ml-1'>
                <BsChevronLeft  className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 
                cursor-pointer opacity-0 transition hover: scale-125
                group-hover:opacity-100 ${!isMoved && 'hidden'}`} onClick={()=> handleClick('left')}/>

                <div ref={rowRef} className="flex scrollbar-hide items-center space-x-0.5
                overflow-x-scroll md:space-x-2.5 md:p-2">
                      {
                        movies.map((movie, index) => (
                            
                            <Movie key={index} movie={movie} largeornot={isLarge ? '350px' : '150px'}  showRating={showTopRating ? true : false}/>

 
                        ))
                    }
                </div>

                <BsChevronRight className={`absolute top-0 bottom-0 right-0 z-40 m-auto h-9 w-9 
                cursor-pointer opacity-0 transition hover:scale-125 md:-top-7
                group-hover:opacity-100 `} onClick={()=> handleClick('right')}/>
            </div>
        </div>
    )
}

export default RowMovies
