import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  
 
  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
      <div className='mt-0 md:-mt-52 pl-6 relative z-20 font-thin'>
      <MovieList title={"Now Playing"} movies ={movies?.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies ={movies?.popularMovies}/>
      <MovieList title={"Popular"} movies ={movies?.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies ={movies?.nowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer;