import React from 'react'
import { Header } from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import  SecondaryContainer  from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


export const Browse = () => {
const showGptsearch = useSelector(store => store.gpt.showGptsearch)
  useNowPlayingMovies()
  usePopularMovies()

  return (
     <div>
       <Header/>
      {showGptsearch ? <GptSearch /> : (
        <>
          <MainContainer/>
       <SecondaryContainer/>
        </>
      )}
       
       {/* MainContainer
             - videoBackground
             - VideoTitle
           Secondarycontainer
              -MovieList
               -Cards */ }
     </div>
  )
}
