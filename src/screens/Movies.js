import React from 'react'
import Layout from '../Layout/Layout'
import RowMovies from '../Components/Home/Row'
import requests from '../urls'
import { BsCollectionFill } from 'react-icons/bs'

function Movies() {
  return (
    <Layout>
      <div className="mx-auto min-h-screen px-2 mb-6">
        <h1 className="relative w-full mt-4 text-3xl font-bold text-center text-white-800">ALL MOVIES</h1>
        <RowMovies url={requests.fetchTrending} title='All Movies' icon={BsCollectionFill} />
        <RowMovies url={requests.fetchComedyMovies} title='Popular Shows' icon={BsCollectionFill} />
        <RowMovies url={requests.fetchNetflixOriginals} title='Popular Tv' icon={BsCollectionFill} />
      </div>
    </Layout>
  )
}

export default Movies