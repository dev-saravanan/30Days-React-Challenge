import './index.css'

const NavBar = props => {
  const {score, topScore, emojiExists} = props

  const scoreElement = (
    <div className="scores-container">
      <p className="score">Score: {score}</p>
      <p className="top-score">Top Score: {topScore}</p>
    </div>
  )

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {!(emojiExists || score === 12) && scoreElement}
    </nav>
  )
}

export default NavBar
