import './App.scss';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import GameForm from '../GameForm/GameForm';
import MathBoard from '../MathBoard/MathBoard';
import Header from '../Header/Header';
import EndPage from '../EndPage/EndPage';
import NextButton from '../NextButton/NextButton';

function App() {
  const [operation, setOperation] = useState<string>('+');
  const [time, setTime] = useState<string>('180');
  const [numberCorrect, setNumberCorrect] = useState<number>(0);
  const [numberIncorrect, setNumberIncorrect] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<boolean>(true);

  const startTimer = () => {
    setTimeLeft(true);
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!timeLeft) {
      navigate("/end");
      setTimeLeft(true);
    }
  }, [timeLeft])

  const endTimer = () => {
    setTimeLeft(false);
  }

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
        <Route path="/play" element={
          <div className='game-board'>
            <Header time={time} endTimer={endTimer} />
            <MathBoard operation={operation} increaseCorrect={increaseCorrect} increaseIncorrect={increaseIncorrect}/>
            <NextButton nextLink='/end' />
          </div>
        }/>
        <Route path="/end" element={
          <>
            <EndPage numberCorrect={numberCorrect} numberIncorrect={numberIncorrect} time={time} />
            <NextButton nextLink='/' />
          </>
        }/>
      </Routes>
    </main>
  );
}

export default App;
