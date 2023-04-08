import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';



const Tag = () => {
  
  
  const [tag, settag] = useState('')
  const {gif, loading, fetchData} = useGif(tag)

  return (
    <div className='bg-blue-400 w-1/2 mt-4 pb-4 mb-8 rounded-lg border-2 border-black flex flex-col items-center gap-y-4 '>
      <h2 className='text-2xl font-bold underline uppercase text-white'> {'Random ' + tag + ' Gif'}</h2>

      { loading ? <Spinner /> : <img src={gif} width="450" height="200"/>}
      
      <input 
        type="text" 
        name="tag" 
        placeholder="Enter tag" 
        value={tag} 
        onChange={(event) => settag(event.target.value)} 
        className='bg-white w-10/12 rounded-md py-3 font-semibold px-8 text-xl border-none outline-none'
      />

      <button 
        onClick={() => fetchData()}
        className='bg-white w-10/12 rounded-md py-2 font-semibold text-xl active:bg-yellow-400 transition-all duration-100'
      >Generate</button>
    </div>
  )
}

export default Tag
