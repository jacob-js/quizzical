import React from 'react'
import Button from '../../ui/Button'
import QuizItem from './QuizItem'

function Quiz() {
    const items = [
        {
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The common software-programming acronym &quot;I18N&quot; comes from the term &quot;Interlocalization&quot;.",
            "correct_answer": "False",
            "incorrect_answers": [
              "True"
            ]
          },
          {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
            "correct_answer": "Taiwan",
            "incorrect_answers": [
              "United States",
              "Germany",
              "China (People&#039;s Republic of)"
            ]
          },
          {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
            "correct_answer": "Green",
            "incorrect_answers": [
              "Red",
              "Blue",
              "Yellow"
            ]
          },
          {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which computer language would you associate Django framework with?",
            "correct_answer": "Python",
            "incorrect_answers": [
              "C#",
              "C++",
              "Java"
            ]
          },
          {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "How long is an IPv6 address?",
            "correct_answer": "128 bits",
            "incorrect_answers": [
              "32 bits",
              "64 bits",
              "128 bytes"
            ]
          }
    ]
  return (
    <div className='flex flex-col gap-5 pb-20'>
        {
            items.map((item, index) => <QuizItem {...item} key={index} />)
        }
        <Button>Check answers</Button>
    </div>
  )
}

export default Quiz