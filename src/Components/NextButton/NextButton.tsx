import './NextButton.scss';
import { Link } from 'react-router-dom';
import arrowImage from '../../images/arrow-icon.png';

type Props = {
  nextLink: string
}

function NextButton({ nextLink }: Props) {
  return (
    <Link to={nextLink}>
      <button className='nextButton'>
        <p>{nextLink === '/' ? "play again!" : "let's go!"}</p>
        <img src={arrowImage} alt='next-arrow'/>
      </button>
    </Link>
  );
}

export default NextButton;
