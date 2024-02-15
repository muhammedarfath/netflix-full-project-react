

import { API_KEY,baseUrl } from './Constants/Constants'

export const popular = `${baseUrl}/trending/tv/day?language=en-US&api_key=${API_KEY}`
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`