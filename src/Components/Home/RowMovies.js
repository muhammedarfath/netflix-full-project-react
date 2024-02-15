import React, { useEffect, useState } from 'react'
import Titles from '../Titles'
import axios from '../../axios'
import Movie from '../Movie'
import { Link } from 'react-router-dom'

function RowMovies(props) {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            alert('Network error')
        })
    }, [])

    return (
        <div className="my-16">
            <style>
                {`
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;
                }

                .hide-scroll-bar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                `}
            </style>
            <Titles title={props.title} Icon={props.icon} />
            <div className="row ml-1 mt-3 text-white">
                <div className="posters flex overflow-x-auto overflow-y-hidden hide-scroll-bar">
                    {
                        movies.map((movie, index) => (
                            <Link key={index} to={`/movies/${movie.name}`} className='mr-1'>
                                <Movie movie={movie} smallOrNot={props.isSmall ? '15rem' : '20rem'}  showRating={props.showTopRating ? true : false}/>
                            </Link>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RowMovies
