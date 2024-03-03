import React from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import RowMovies from '../Components/Home/Row'
import Promos from '../Components/Home/Promos'
import requests from '../urls'
import { BsBookmarkStarFill, BsCollectionFill } from 'react-icons/bs'
import { useRecoilValue } from 'recoil'
import Modal from '../Components/Modal'
import { modalState, movieState } from '../Atoms/ModalAtom'
import useAuth from '../Hooks/useAuth'
import Plans from '../Components/Plans/Plans'
import useList from '../Hooks/useList'


function HomeScreen() {
  const {loading,user}=useAuth()
  const showModal = useRecoilValue(modalState)
  const movie = useRecoilValue(movieState)
  const list = useList(user?.id)
  const subscription = false
  if (loading || subscription === null) return null
  // if (!subscription) return <Plans />


  console.log('ANTHUVADYYYYYYY',list)

  return (
    <div className="relative h-screen bg-gradient-to-b  lg:h-[140vh]">
      <Layout>
        <Banner url={requests.fetchHorrorMovies} />
        <section className='md:space-y-24'>
        <RowMovies url={requests.fetchHorrorMovies} title='Trending Now' isLarge  icon={BsCollectionFill} />
        <RowMovies url={requests.fetchNetflixOriginals} title='Netflix Originals' icon={BsCollectionFill}  />
        <RowMovies url={requests.fetchActionMovies} title='Action Thriller'  icon={BsCollectionFill} />
        <RowMovies url={requests.fetchComedyMovies} title='Comedies'  icon={BsCollectionFill} />
        <RowMovies url={requests.fetchHorrorMovies} title='Scary Movies'  icon={BsCollectionFill} />
        {list.length > 0 && <RowMovies title="My List" url={list} icon={BsCollectionFill} />}
        <Promos />
        <RowMovies url={requests.fetchRomanceMovies} title='Romance Movies' icon={BsCollectionFill}  />
        <RowMovies url={requests.fetchDocumentaries} title='Top Rated' icon={BsBookmarkStarFill} showTopRating />
        </section>
        {showModal && <Modal/>}
      </Layout>
    </div>

  )
}

export default HomeScreen


