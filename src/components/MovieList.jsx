import React from 'react'
import Moviecard from './Moviecard'

const MovieList = ({title, movies}) => {
  console.log(movies)
  
  return (
  (movies &&
<div className='p-6 '>
  <h1 className='text-3xl py-2 text-white'>{title}</h1>
    <div className='flex no-scrollbar overflow-x-scroll'>
        
    <div className='flex'>
       {movies.map((movie) => (
       <Moviecard key={movie.id} posterPath={movie?.poster_path}/>
      ))} 
    </div>
    </div>
</div>
  ))
}

export default MovieList