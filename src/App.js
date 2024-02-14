import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AboutUs from './screens/AboutUs'
import NotFound from './screens/NotFound'

function App() {
  return (
     <Routes>
       <Route path='/' element={<HomeScreen/>}/>
       <Route path='/about-us' element={<AboutUs/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>
  )

}

export default App