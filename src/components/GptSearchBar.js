import React from 'react'
import { useSelector } from 'react-redux'
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

  const langkey = useSelector((store) => store.config.lang)
  return (
    <div className='text-white pt-[10%] flex justify-center font-medium'>
        <form action="" className='w-1/2 bg-black grid grid-cols-12' >
            <input type="text" placeholder={lang[langkey].gptSearchPlaceholder} className='p-4 m-4 col-span-9'/>
            <button className='col-span-3 m-4 py-2 px-4 bg-yellow-600 text-white rounded-sm'>{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar