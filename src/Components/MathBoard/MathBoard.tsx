import React from 'react';
import './MathBoard.scss';
import MathCard from '../MathCard/MathCard';

type Props = {
  operation: string;
  increaseCorrect: () => void;
  increaseIncorrect: () => void;
}

function MathBoard({ operation, increaseCorrect, increaseIncorrect }: Props) {
  const renderCards = () => {
    let cards = [];
    for (var i = 0; i < 8; i++) {
      cards.push(<MathCard key={i} operation={operation} increaseCorrect={increaseCorrect} increaseIncorrect={increaseIncorrect} />)
    }
    return cards;
  }

  return (
    <section className='mathBoard'>
      {renderCards()}
    </section>
  );
};

export default MathBoard;