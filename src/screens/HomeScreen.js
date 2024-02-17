import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import RowMovies from '../Components/Home/Row'
import Promos from '../Components/Home/Promos'
import requests from '../urls'
import { BsBookmarkStarFill, BsCollectionFill } from 'react-icons/bs'
import axios from 'axios'

function HomeScreen() {

  return (
    <div className="relative h-screen bg-gradient-to-b  lg:h-[140vh]">
      <Layout>
        <Banner url={requests.fetchTrending} />
        <section className='md:space-y-24'>
        <RowMovies url={requests.fetchTrending} title='Trending Now' isLarge  icon={BsCollectionFill} />
        <RowMovies url={requests.fetchNetflixOriginals} title='Netflix Originals' icon={BsCollectionFill}  />
        <RowMovies url={requests.fetchActionMovies} title='Action Thriller'  icon={BsCollectionFill} />
        <RowMovies url={requests.fetchComedyMovies} title='Comedies'  icon={BsCollectionFill} />
        <RowMovies url={requests.fetchHorrorMovies} title='Scary Movies'  icon={BsCollectionFill} />
        <Promos />
        <RowMovies url={requests.fetchRomanceMovies} title='Romance Movies' icon={BsCollectionFill}  />
        <RowMovies url={requests.fetchDocumentaries} title='Top Rated' icon={BsBookmarkStarFill} showTopRating />
        </section>
      </Layout>
    </div>

  )
}

export default HomeScreen


