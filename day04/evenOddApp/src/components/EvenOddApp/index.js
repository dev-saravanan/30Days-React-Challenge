import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    isEven: true,
    countNum: 0,
  }

  onIncrement = () => {
    const {countNum} = this.state
    let randomNum = Math.random()
    randomNum = Math.ceil(randomNum * 100)

    console.log(countNum + randomNum)
    let checkEven
    if ((countNum + randomNum) % 2 === 0) {
      checkEven = true
    } else {
      checkEven = false
    }

    return this.setState(prevState => ({
      isEven: checkEven,
      countNum: prevState.countNum + randomNum,
    }))
  }

  render() {
    const {isEven, countNum} = this.state

    const textEvenOdd = () => {
      if (isEven) {
        return <p className="count-description">Count is Even</p>
      }
      return <p className="count-description">Count is Odd</p>
    }

    return (
      <div className="bg-container">
        <div className="inner-bg-container">
          <h1 className="heading-text">Count {countNum}</h1>
          {textEvenOdd()}
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
