import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInputCount: 0}

  countSearchInput = event => {
    let inputValue = event.target.value
    const inputValueArray = inputValue.split('')
    const nonEmptyValue = inputValueArray.filter(eachChar => eachChar !== ' ')
    inputValue = nonEmptyValue.join('')
    this.setState({searchInputCount: inputValue.length})
  }

  render() {
    const {searchInputCount} = this.state

    let searchCountElement

    if (searchInputCount > 0) {
      searchCountElement = (
        <p className="letters-count-text">No.of letters: {searchInputCount}</p>
      )
    } else {
      searchCountElement = (
        <p className="letters-count-text">No.of letters: 0</p>
      )
    }

    return (
      <div className="bg-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <div className="text-container">
          <h1 className="heading-text">Calculate the Letters you enter</h1>
          <label className="search-description" htmlFor="search-input">
            Enter the phrase
          </label>
          <input
            id="search-input"
            className="search-input"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.countSearchInput}
          />
          <div className="letter-count-container">{searchCountElement}</div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
