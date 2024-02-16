import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import RowMovies from '../Components/Home/Row'
import Promos from '../Components/Home/Promos'
import requests from '../urls'
import { BsBookmarkStarFill, BsCollectionFill } from 'react-icons/bs'
import axios from 'axios'

function HomeScreen() {

  axios.get(requests.fetchDocumentaries).then((response)=>{
    console.log(response)
  })
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]">
      <Layout>
        <Banner url={requests.fetchTrending} />
        <RowMovies url={requests.fetchTrending} title='Trending Now' isLarge  icon={BsCollectionFill} />
        <RowMovies url={requests.fetchNetflixOriginals} title='Netflix Originals' icon={BsCollectionFill}  />
        <RowMovies url={requests.fetchActionMovies} title='Action Thriller'  icon={BsCollectionFill} />
        <RowMovies url={requests.fetchComedyMovies} title='Comedies'  icon={BsCollectionFill} />
        <RowMovies url={requests.fetchHorrorMovies} title='Scary Movies'  icon={BsCollectionFill} />
        <Promos />
        <RowMovies url={requests.fetchRomanceMovies} title='Romance Movies' icon={BsCollectionFill}  />
        <RowMovies url={requests.fetchDocumentaries} title='Top Rated' icon={BsBookmarkStarFill} showTopRating />
      </Layout>
    </div>

  )
}

export default HomeScreen


