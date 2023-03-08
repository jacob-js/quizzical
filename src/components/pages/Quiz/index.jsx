import { Spinner } from '@chakra-ui/spinner';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react'
import Button from '../../ui/Button'
import QuizItem from './QuizItem'

function Quiz() {
    const [{loading, data}, getData] = useAxios('https://opentdb.com/api.php?amount=5&category=18');
    const [questions, setQuestions] = useState([]);
    const [submitted, setSubmitted] = useState(false);

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

    const handleReplay = () =>{
      getData().then(() =>{
        setSubmitted(false)
      })
    }

  return (
    <div className='flex flex-col gap-5 pb-20'>
        {
            loading && !submitted ? <Spinner /> :
            questions.map((item, index) => <QuizItem item={item} key={index} onChoose={onChoose} submitted={submitted} />)
        }
        {
          submitted ?
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="text-primary-900 font-bold lg:text-lg">You scored {questions.filter(q => q.succeed).length}/{questions.length}</div>
            <Button onClick={handleReplay} isLoading={loading}>Play Again</Button>
          </div>:
          <Button isDisabled={questions.filter(q => q.hasOwnProperty('succeed')).length < 5} onClick={() =>setSubmitted(true)}>Check answers</Button>
        }
    </div>
  )
}

export default Quiz