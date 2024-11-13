import React from 'react';
import './EndPage.scss';

type Props = {
  numberCorrect: number;
  numberIncorrect: number;
  time: string;
}

function EndPage({ numberCorrect, numberIncorrect, time }: Props) {
  const speed =
    ((numberCorrect
    / parseInt(time)
    * 60)
    .toFixed(0));

  const accuracy =
    ((numberCorrect /
    (numberCorrect + numberIncorrect)
    * 100)
    .toFixed(0));

  return (
    <section className='endPage'>
      <h1>GREAT WORK!</h1>
      <h2>your results:</h2>
      <p className='end-data-text'><span className='highlight-data' id='number-correct-text'>{numberCorrect}</span> correct answers</p>
      <p className='end-data-text'><span className='highlight-data' id='number-correct--per-minute-text'>{speed}</span> correct answers per minute</p>
      <p className='end-data-text'><span className='highlight-data' id='percent-accurate-text'>{accuracy}%</span> accuracy</p>
    </section>
  );
}

export default EndPage;