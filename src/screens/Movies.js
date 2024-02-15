import React from 'react'
import Layout from '../Layout/Layout'
import RowMovies from '../Components/Home/RowMovies'
import { movies,topshows,popular } from '../urls'
import {BsCollectionFill } from 'react-icons/bs'

function Movies() {
  return (
    <Layout>
        <div className="mx-auto min-h-screen px-2 mb-6">
           <h1 className="relative w-full mt-4 text-3xl font-bold text-center text-white-800">ALL MOVIES</h1>
          <RowMovies url={movies} title='All Movies' icon={BsCollectionFill}/>
          <RowMovies url={topshows} title='Popular Shows' icon={BsCollectionFill}/>
          <RowMovies url={popular} title='Popular Tv' icon={BsCollectionFill}/>
        </div>
    </Layout>
  )
}

export default Movies