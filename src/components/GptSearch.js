import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {BACKGROUND_IMG} from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
                <img src={BACKGROUND_IMG} alt="wallpaper" className=" h-screen w-screen object-cover"/>
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch