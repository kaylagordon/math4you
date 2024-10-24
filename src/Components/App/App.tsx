import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import GameForm from '../GameForm/GameForm';
import MathBoard from '../MathBoard/MathBoard';
import EndPage from '../EndPage/EndPage';
import NextButton from '../NextButton/NextButton';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<><HomePage /><NextButton nextLink='/select' /></>}/>
        <Route path="/select" element={<><GameForm /><NextButton nextLink='/play' /></>}/>
        <Route path="/play" element={<><MathBoard /><NextButton nextLink='/end' /></>}/>
        <Route path="/end" element={<><EndPage /><NextButton nextLink='/' /></>}/>
      </Routes>
    </main>
  );
}

export default App;
