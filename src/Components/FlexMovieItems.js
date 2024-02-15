import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'

function FlexMovieItems({movie}) {
    console.log(movie)
  return (
    <>
    <div className="flex items-center gap-2 w-50">
        <span className="text-sm font-medium" >{movie.title} </span>
    </div>
    <div className="flex items-center gap-2">
        <FaRegCalendarAlt className='test-subMain w-3 h-3' />
        <span className="text-sm font-medium" >{movie.release_date} </span>
    </div>
    {/* <div className="flex items-center gap-2">
        <BiTime className="test-subMain w-3 h-3"/>
        <span className="text-sm font-medium" >2hr</span>
    </div> */}
    </>
  )
}

export default FlexMovieItems