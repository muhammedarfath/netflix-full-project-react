import React from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import RowMovies from '../Components/Home/RowMovies'
import Promos from '../Components/Home/Promos'
import { action,popular, originals,toprated } from '../urls'
import { BsBookmarkStarFill, BsCollectionFill } from 'react-icons/bs'

function HomeScreen() {
  return (
    <Layout>
        <div className=" mx-auto min-h-screen px-2 mb-6">
          <Banner/>
          <RowMovies url={popular} title='Popular Movies' icon={BsCollectionFill}/>
          <RowMovies url={originals} title='Netflix Originals' icon={BsCollectionFill} isSmall/>
          <RowMovies url={action} title='Action'isSmall  icon={BsCollectionFill} />
          <Promos/>
          <RowMovies url={toprated} title='Top Rated' icon={BsBookmarkStarFill} showTopRating />

        </div>
    </Layout>
    
  )
}

export default HomeScreen