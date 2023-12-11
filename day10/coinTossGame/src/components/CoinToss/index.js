import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {tossedCoin: 0, headsCount: 0, tailsCount: 0, totalCount: 0}

  tossCoin = () => {
    let headCount
    let tailCount

    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      headCount = 1
      tailCount = 0
    } else {
      tailCount = 1
      headCount = 0
    }

    this.setState(prevState => ({
      tossedCoin: tossResult,
      headsCount: prevState.headsCount + headCount,
      tailsCount: prevState.tailsCount + tailCount,
      totalCount: prevState.totalCount + headCount + tailCount,
    }))
  }

  render() {
    const {tossedCoin, headsCount, tailsCount, totalCount} = this.state

    let imgUrl
    if (tossedCoin === 0) {
      imgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      imgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-text">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="toss-img" src={imgUrl} alt="toss result" />
          <button className="toss-button" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-text">Total:{totalCount}</p>
            <p>Heads:{headsCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
