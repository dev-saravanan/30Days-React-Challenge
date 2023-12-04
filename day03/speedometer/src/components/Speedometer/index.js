import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speedCount: 0}

  onAccelerate = () =>
    this.setState(prevState =>
      prevState.speedCount < 200 && prevState.speedCount >= 0
        ? {speedCount: prevState.speedCount + 10}
        : {speedCount: 200},
    )

  onBrake = () =>
    this.setState(prevState =>
      prevState.speedCount > 0
        ? {speedCount: prevState.speedCount - 10}
        : {speedCount: 0},
    )

  render() {
    const {speedCount} = this.state

    return (
      <div className="bg-container">
        <h1 className="head-text">Speedometer</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-count-text">Speed is {speedCount}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button className="brake-btn" type="button" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
