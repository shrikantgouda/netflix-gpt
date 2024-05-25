import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from "./GptMovieSuggestions"
import { BGLOGO } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
         <div className='fixed -z-10'>
      <img className="h-screen object-cover md:h-full" src={BGLOGO}
       alt='logo' />
    </div>
    <div className=''>
      <GptSearchBar />
      <GptMovieSuggestions />
      </div>
    
    </>
  )
}

export default GptSearch