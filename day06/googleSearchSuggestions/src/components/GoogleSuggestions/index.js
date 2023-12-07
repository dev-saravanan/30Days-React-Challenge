import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchValue = event => this.setState({searchInput: event.target.value})

  setSearchInputValue = suggestionText =>
    this.setState({searchInput: suggestionText})

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchSuggestions = suggestionsList.filter(eachSuggestion => {
      let {suggestion} = eachSuggestion
      suggestion = suggestion.toLowerCase()
      return suggestion.includes(searchInput.toLowerCase())
    })

    return (
      <div className="bg-container">
        <div className="inner-bg-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
          />
          <div className="complete-search-container">
            <div className="search-box-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.searchValue}
              />
            </div>
            <ul className="suggestion-container">
              {searchSuggestions.map(eachSuggestion => (
                <SuggestionItem
                  suggestionItem={eachSuggestion}
                  updateSearchValue={this.setSearchInputValue}
                  key={eachSuggestion.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
