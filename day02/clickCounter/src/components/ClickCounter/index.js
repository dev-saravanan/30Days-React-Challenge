import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {counter: 0}

  onIncrement = () =>
    this.setState(prevState => ({counter: prevState.counter + 1}))

  render() {
    const {counter} = this.state

    return (
      <div className="bg-container">
        <h1 className="counter-heading">
          The Button has been clicked{' '}
          <span className="counter-number">{counter}</span> times
        </h1>
        <p className="counter-description">
          Click the button to increase the count!
        </p>
        <button
          className="increment-button"
          type="button"
          onClick={this.onIncrement}
        >
          Click Me !
        </button>
      </div>
    )
  }
}
export default ClickCounter
