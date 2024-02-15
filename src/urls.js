

import { API_KEY } from './Constants/Constants'

export const popular = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${API_KEY}`
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`