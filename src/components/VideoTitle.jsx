import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-20 absolute text-white bg-gradient-to-r from-black'>
       <h1 className='text-3xl font-bold'>{title}</h1>
       <p className='py-6 text-sm w-1/3'>{overview}</p>
       <div>
         <button className='bg-white text-black p-2 px-5 text-xl rounded-lg hover:bg-opacity-70'>
            Play</button>
         <button className='mx-2 bg-gray-500 text-white p-2 px-7 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70' >More Info</button>
       </div>

    </div>
  )
}

export default VideoTitle