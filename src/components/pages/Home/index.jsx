import React from 'react'
import Button from '../../ui/Button'
import OptionTag from '../../ui/OptionTag'

function Home() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <div className="text-4xl sm:text-7xl text-primary-900 font-bold -tracking-wide">Quizzical</div>
        <div className="text-primary-900 text-xl text-center mt-5 lg:max-w-lg mb-7 -tracking-wide leading-6">Exercise your knowledge to keep your brain aware of all chunks of science you have</div>
        <Button>Start Quiz</Button>
        <OptionTag>Cabbage Patch Kids</OptionTag>
        <OptionTag selected>Cabbage Patch Kids</OptionTag>
        <OptionTag isInvalid>Cabbage Patch Kids</OptionTag>
        <OptionTag isValid>Cabbage Patch Kids</OptionTag>
    </div>
  )
}

export default Home