import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgain} = props

  let result
  let scoreText
  let resultImg

  if (score === 12) {
    result = 'Won'
    scoreText = 'Best Score'
    resultImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    result = 'Lose'
    scoreText = 'Score'
    resultImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  return (
    <div className="card-container">
      <div className="text-container">
        <h1 className="result-text">You {result} </h1>
        <p className="best-score-text">{scoreText}</p>
        <p className="score-count">{score}/12</p>
        <button className="play-again-btn" type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img className="result-img" src={resultImg} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
