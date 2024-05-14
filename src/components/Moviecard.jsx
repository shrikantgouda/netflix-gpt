import React from 'react'
import { IMG_CDN } from '../utils/constants'

const Moviecard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt='movie' src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default Moviecard