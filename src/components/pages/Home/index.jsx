import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button'
import OptionTag from '../../ui/OptionTag'

function Home() {
  const navigate = useNavigate();

  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <div className="text-4xl sm:text-7xl text-primary-900 font-bold -tracking-wide">Quizzical</div>
        <div className="text-primary-900 text-xl text-center mt-5 lg:max-w-lg mb-7 -tracking-wide leading-6">Exercise your knowledge to keep your brain active in computer science field</div>
        <Button onClick={() =>navigate('/quiz')}>Start Quiz</Button>
    </div>
  )
}

export default Home