import './Header.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

type Props = {
  time: string;
  endTimer: () => void;
};

function Header({ time, endTimer }: Props) {
  const [minutesLeft, setMinutesLeft] = useState<number>(Math.floor(parseInt(time) / 60));
  const [secondsLeft, setSecondsLeft] = useState<number>(parseInt(time) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          return setMinutesLeft((prevMinutes) => {
            if (prevMinutes > 0) {
              return prevMinutes - 1;
            } else {
              clearInterval(timer);
              endTimer();
              return 0;
            }
          }), 59;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className='Header'>
      <h1>MATH<span className='highlight-title'>4</span>YOU</h1>
      <h2>TIME LEFT: 0{minutesLeft}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}</h2>
      <Link to='/select'>
        <button className='go-back-button'>GO BACK</button>
      </Link>
    </header>
  );
}

export default Header;
