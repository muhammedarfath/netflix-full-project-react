

import { API_KEY,baseUrl } from './Constants/Constants'

export const toprated = `${baseUrl}/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`
export const popular = `${baseUrl}/trending/tv/day?language=en-US&api_key=${API_KEY}`
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const shows =`${baseUrl}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
export const topshows =`${baseUrl}/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`
export const movies = `${baseUrl}/trending/movie/day?language=en-US&api_key=${API_KEY}`
