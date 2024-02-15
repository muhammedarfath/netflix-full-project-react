import React from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import RowMovies from '../Components/Home/RowMovies'
import Promos from '../Components/Home/Promos'
import TopRated from '../Components/Home/TopRated'
import { action,popular, originals } from '../urls'

function HomeScreen() {
  return (
    <Layout>
        <div className=" mx-auto min-h-screen px-2 mb-6">
          <Banner/>
          <RowMovies url={popular} title='Popular Movies'/>
          <RowMovies url={originals} title='Netflix Originals' isSmall/>
          <RowMovies url={action} title='Action'isSmall />
          <Promos/>
          <TopRated/>
        </div>
    </Layout>
    
  )
}

export default HomeScreen