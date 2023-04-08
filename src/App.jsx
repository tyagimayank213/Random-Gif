import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className="w-full  flex flex-col items-center background box-content">
      <h1 className='bg-white rounded-md w-11/12 py-2 text-center mt-[1.5rem] text-2xl font-bold'>
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-12">
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App