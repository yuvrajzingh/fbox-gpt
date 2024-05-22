import React from 'react'

const VideoTitle = ({title, overview}) => {
  return ( 
    <div className='absolute w-full aspect-video px-20 text-slate-100 bg-gradient-to-r from-black'>
      <div className=' my-[25%]'>
          <h1 className='text-6xl font-bold'>{title}</h1>
          <p className='py-6 text-lg font-medium w-2/4'>{overview}</p>
          <div className='font-medium'>
              <button className='bg-gray-50 text-gray-900 p-3 px-12 text-xl rounded-lg hover:bg-opacity-80'>▶ Play</button>
              <button className='mx-2 bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80'> More Info</button>
          </div>  
      </div>
        
    </div>
  ) 
}

export default VideoTitle