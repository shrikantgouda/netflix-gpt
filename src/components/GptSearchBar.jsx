import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import {  useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'


const GptSearchBar = () => {
  const dispacth = useDispatch()
  const searchText = useRef(null)
  const langkey = useSelector((store) => store.config.lang)

// SEARCH MOVIE IN TMDB
 const searchMovieTMDB = async (movie) => {
    const data = await fetch ("https://api.themoviedb.org/3/search/movie?query="+ movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
     const json = await data.json()
     return json.results;
 }

  const handleGptSearchClick = async () => {
     console.log(searchText.current.value)
     const gptQuery = "Act as a Movies Recommendation system and suggest some movies for the query" + searchText.current.value+". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don ,3Idiots, krishh";

     const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
   console.log(gptResults.choices?.[0]?.message?.content)
   const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

   // array of movies ex [koi mil gaya, krishh]
   // For each movie i will search TMDB API 
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
    // it will return 5 promises bcz searchmovie func is async that map execute immediatly[promise, promise, promise, promise, promise]

    const tmdbResults = await Promise.all(promiseArray)

    dispacth(addGptMovieResult({movieNames:gptMovies , movieResults: tmdbResults}))

   console.log(tmdbResults)

  }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className=' bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input
            ref={searchText}
             type='text' 
             className='p-1 m-5 col-span-9' 
             placeholder={lang[langkey]?.gptSearchPlaceholder}
           />

            <button className='py-3 m-4 px-4 col-span-3 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langkey]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar