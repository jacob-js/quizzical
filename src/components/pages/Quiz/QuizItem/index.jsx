import React, { useState } from 'react'
import OptionTag from '../../../ui/OptionTag'

function QuizItem({item, onChoose}) {
    const {question, incorrect_answers, correct_answer, succeed} = item;
    const [selected, setSelected] = useState('');

  return (
    <div className='py-4 border-b border-light-blue'>
        <div className="text-primary-900 font-bold lg:text-xl">{question}</div>
        <div className="flex mt-5 flex-wrap gap-3">
            {
                [...incorrect_answers, correct_answer].map((answer, index) =>(
                    <OptionTag key={index} onClick={() =>{setSelected(answer); onChoose(item, answer)}} selected={answer === selected} isValid={succeed} isInvalid={succeed === false} submitted={false}>{answer}</OptionTag>
                ))
            }
        </div>
    </div>
  )
}

export default QuizItem