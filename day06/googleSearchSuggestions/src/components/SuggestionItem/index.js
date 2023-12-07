import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  render() {
    const {suggestionItem, updateSearchValue} = this.props

    const setSearchValue = () => updateSearchValue(suggestionItem.suggestion)
    return (
      <li className="suggestion-item-container">
        <p className="suggestion-text">{suggestionItem.suggestion}</p>
        <img
          className="arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={setSearchValue}
        />
      </li>
    )
  }
}
export default SuggestionItem
