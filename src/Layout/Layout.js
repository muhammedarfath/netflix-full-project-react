import React from 'react'
import NavBar from './Navbar/NavBar'
import Footer from './Footer/Footer'

function Layout({childern}) {
  return (
    <div className='bg-main text-white'>
      <NavBar/>
      {childern}
      <Footer/>
    </div>
  )
}

export default Layout