import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';



const Random = () => {
  
  const {gif, loading, fetchData} = useGif()

  return (
    <div className='bg-green-500 w-1/2 mt-4 pb-4 rounded-lg border-2 border-black flex flex-col items-center gap-y-4 '>
      <h2 className='text-2xl font-bold underline uppercase'> A Random Gifs</h2>

      { loading ? <Spinner /> : <img src={gif} width="450" height="200"/>}
      
      <button 
        onClick={() => fetchData()}
        className='bg-white w-10/12 rounded-md py-2 font-semibold active:bg-yellow-400 transition-all duration-100'
      >Generate</button>
    </div>
  )
}

export default Random
