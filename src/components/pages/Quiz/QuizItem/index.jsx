import React, { useState } from 'react'
import OptionTag from '../../../ui/OptionTag'

function QuizItem({question, incorrect_answers, correct_answer}) {
    const [selected, setSelected] = useState('');
  return (
    <div className='py-4 border-b border-light-blue'>
        <div className="text-primary-900 font-bold lg:text-xl">{question}</div>
        <div className="flex gap-3">
            {
                [...incorrect_answers, correct_answer].map((answer, index) =>(
                    <OptionTag key={index} onClick={() =>setSelected(answer)} selected={answer === selected}>{answer}</OptionTag>
                ))
            }
        </div>
    </div>
  )
}

export default QuizItem