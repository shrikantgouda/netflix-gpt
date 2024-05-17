import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2 grid grid-cols-12'>
            <input
             type='text' 
             className='p-1 m-5 col-span-9' 
             placeholder={lang[langkey]?.gptSearchPlaceholder}
           />

            <button className='py-3 m-4 px-4 col-span-3 bg-red-700 text-white rounded-lg'>{lang[langkey]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar