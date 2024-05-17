import React from 'react'
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


 const VideoBackground = ({movieId}) => {

 const trailerVideo = useSelector(store => store.movies?.trailerVideo)

 useMovieTrailer(movieId)

  return (
    <div className='w-screen '>
      <iframe 
      className='w-screen  aspect-video'
      frameBorder="0"
       src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?playlist=Kdr5oedn7q8&loop=1;rel=0&autoplay=1&mute=1&controls=0&showinfo=0" } 
       title="YouTube video player" 
       allowFullScreen
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       ></iframe>
    </div>
  )
  // return (
  //   <div className='relative'>
  //     <iframe 
      
  //     width="2060" height="2000"
  //     frameBorder="0"
  //      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1" } 
  //      title="YouTube video player" 
  //      allowFullScreen
  //      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  //      ></iframe>
  //   </div>
  // )
}

export default VideoBackground

