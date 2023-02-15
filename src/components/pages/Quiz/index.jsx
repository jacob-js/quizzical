import useAxios from 'axios-hooks';
import React, { useEffect, useState } from 'react'
import Button from '../../ui/Button'
import QuizItem from './QuizItem'

function Quiz() {
    const [{loading, data}] = useAxios('https://opentdb.com/api.php?amount=5&category=18');
    const [questions, setQuestions] = useState([]);

    useEffect(() =>{
      (() =>{
        data?.results && setQuestions(data.results)
      })()
    }, [data]);

    const onChoose = (question, choice) =>{
      question.succeed = choice === question.correct_answer ? true: false;
      setQuestions(state => {
        const newQuestions = [];
        state.forEach(quest => quest.question !== question.question ? newQuestions.push(quest): newQuestions.push(question));
        return newQuestions;
      });
    };

  return (
    <div className='flex flex-col gap-5 pb-20'>
        {
            loading ? "Loading..." :
            questions.map((item, index) => <QuizItem item={item} key={index} onChoose={onChoose} />)
        }
        <Button>Check answers</Button>
    </div>
  )
}

export default Quiz