import './GameForm.scss';

type Props = {
  operation: string
  time: string
  updateOperation: (newOperation: string) => void
  updateTime: (newTime: string) => void
}

function GameForm(props: Props) {

  const renderOperationButtons = (labels: string[]) => {
    return labels.map(label => {
      return (
        <button
          key={Math.random()}
          className={`${props.operation === label ?
            'form-button selected' :
            'form-button'}`
          }
          value={label}
          name={label}
          onClick={() => props.updateOperation(label)}
        >
          {label === "*" ? "x" : label}
        </button>
      )
    })
  }

  const renderTimeButtons = (labels: string[]) => {
    return labels.map(label => {
      return (
        <button
          key={Math.random()}
          className={`${props.time === label ?
            'form-button selected' :
            'form-button'}`
          }
          value={label}
          name={label}
          onClick={() => props.updateTime(label)}
        >
        {parseInt(label)/60}
        </button>
      )
    })
  }

  return (
    <form className="GameForm">
      <h1>MATH<span>4</span>YOU</h1>
      <div className='topic-container'>
        <p className='form-label'>operation:</p>
        <div className='form-buttons-container'>
          {renderOperationButtons(['+', '-', '*'])}
        </div>
      </div>
      <div className='topic-container'>
        <p className='form-label'>minutes:</p>
        <div className='form-buttons-container'>
          {renderTimeButtons(['180', '60', '30'])}
        </div>
      </div>
    </form>
  );
}

export default GameForm;