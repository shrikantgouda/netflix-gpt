import React from 'react'
import { Header } from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import  SecondaryContainer  from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'


export const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()

  return (
     <div>
       <Header/>
       <MainContainer/>
       <SecondaryContainer/>
       {/* MainContainer
             - videoBackground
             - VideoTitle
           Secondarycontainer
              -MovieList
               -Cards */ }
     </div>
  )
}
