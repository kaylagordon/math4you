import './App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import GameForm from '../GameForm/GameForm';
import MathBoard from '../MathBoard/MathBoard';
import EndPage from '../EndPage/EndPage';
import NextButton from '../NextButton/NextButton';

function App() {
  const [operation, setOperation] = useState<string>('+');
  const [time, setTime] = useState<string>('180');
  const [numberCorrect, setNumberCorrect] = useState<number>(0);
  const [numberIncorrect, setNumberIncorrect] = useState<number>(0);

  const updateTime = (newTime: string) => {
    setTime(newTime);
  }

  const updateOperation = (newOperation: string) => {
    setOperation(newOperation);
  }

  const increaseCorrect = () => {
    setNumberCorrect(numberCorrect + 1);
  }

  const increaseIncorrect = () => {
    setNumberIncorrect(numberIncorrect + 1);
  }


  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<><HomePage /><NextButton nextLink='/select' /></>}/>
        <Route path="/select" element={
          <>
            <GameForm operation={operation} time={time} updateOperation={updateOperation} updateTime={updateTime}/>
            <NextButton nextLink='/play' />
          </>
        }/>
        <Route path="/play" element={<><MathBoard /><NextButton nextLink='/end' /></>}/>
        <Route path="/end" element={<><EndPage /><NextButton nextLink='/' /></>}/>
      </Routes>
    </main>
  );
}

export default App;
