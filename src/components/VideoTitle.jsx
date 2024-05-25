import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black'>
       <h1 className='text-xl md:text-3xl font-bold'>{title}</h1>
       <p className='hidden md:inline-block py-6 text-sm w-1/3'>{overview}</p>
       <div className='my-4 md:m-0'>
         <button className='bg-white text-black py-1 md:py-2 px-3 md:px-4 text-xl rounded-lg hover:bg-opacity-70'>
            Play</button>
         <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-7 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70' >More Info</button>
       </div>

    </div>
  )
}

export default VideoTitle