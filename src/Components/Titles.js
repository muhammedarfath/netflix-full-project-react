import React from 'react'

function Titles({title,Icon}) {
  return (
    <div className="w-full flex sm:gap-3 gap-4 mt-5 mb-5 items-center">
      <Icon className=" sm:w-6 sm:h-6w-4 h-4 ml-5 text-subMain" />
      <h2 className="sm:text-xl font-bold text-lg">{title}</h2>
    </div>
  )
}

export default Titles