import React from 'react';
import './MathCard.scss';
import { useState, useEffect } from 'react';
import { getNumbers, writeExpression, operationPairings } from '../../Helpers/problemSets';
import { getAnswer } from '../../Helpers/apiCalls';

type Props = {
  operation: string;
  increaseCorrect: () => void;
  increaseIncorrect: () => void;
}

function MathCard({operation, increaseCorrect, increaseIncorrect}: Props) {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [expression, setExpression] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [evaluatedTo, setEvaluatedTo] = useState<'waiting' | 'correct' | 'incorrect'>('waiting');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setNumbers(getNumbers());
  }, []);

  useEffect(() => {
    setExpression(writeExpression(numbers, operation));
  }, [numbers]);

  const updateAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const checkAnswer = () => {
    console.log(expression, answer)
    getAnswer(operationPairings[operation], numbers)
    .then(data => {
      console.log(data);
      if (String(data.solution) === answer) {
        setEvaluatedTo('correct');
        increaseCorrect();
        setTimeout(getNewCard, 2500)
      } else {
        setEvaluatedTo('incorrect');
        increaseIncorrect();
      }
    })
    .catch(err => setError(err))
  }

  const getNewCard = () => {
    setNumbers(getNumbers());
    setAnswer('');
    setEvaluatedTo('waiting');
  }

  return (
    <div className={`mathCard ${evaluatedTo}`}>
      <p className='expression-text'>{expression}</p>
      <input
        type='number'
        value={answer}
        onChange={updateAnswer}
      />
      { error && <p>Oops! Try again!</p> }
      <button
        type='button'
        onClick={checkAnswer}
      >CHECK</button>
    </div>
  );
};

export default MathCard;