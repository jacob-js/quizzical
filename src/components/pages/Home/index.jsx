import React from 'react'
import Button from '../../ui/Button'

function Home() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className="text-7xl text-primary-900 font-bold -tracking-wide">Quizzical</div>
        <div className="text-primary-900 text-xl text-center mt-5 lg:max-w-lg mb-7 -tracking-wide">Exercise your knowledge to keep your brain aware of all chunks of science you have</div>
        <Button>Start Quiz</Button>
    </div>
  )
}

export default Home