import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import Movie from '../Components/Movie'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom({
  movie: <Movie/>,
  key: 'movieState',
  default: false,
})