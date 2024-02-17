import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import NotFound from './screens/NotFound'
import TvShows from './screens/TvShows'
import Movies from './screens/Movies'
import Login from './screens/Login'
import { AuthProvider } from './Hooks/useAuth'


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/tv-shows' element={<TvShows/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </AuthProvider>

  )

}

export default App