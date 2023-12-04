import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  ateMango = () =>
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))

  ateBanana = () =>
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="bg-container">
        <div className="inner-bg-container">
          <h1 className="fruits-count-text">
            Bob ate <span className="count">{mangoesCount}</span> mangoes{' '}
            <span className="count">{bananasCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mangoes-container">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" type="button" onClick={this.ateMango}>
                Eat Mango
              </button>
            </div>
            <div className="bananas-container">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" type="button" onClick={this.ateBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
