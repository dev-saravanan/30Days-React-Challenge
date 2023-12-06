import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchDestination = event => this.setState({searchInput: event.target.value})

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchDestinationList = destinationsList.filter(eachDestination => {
      const destinationName = eachDestination.name.toLowerCase()
      return destinationName.includes(searchInput)
    })

    return (
      <div className="bg-container">
        <h1 className="heading-text">Destination Search</h1>
        <div className="search-container">
          <input
            className="search-bar"
            type="search"
            placeholder="Search"
            onChange={this.searchDestination}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="all-item-container">
          {searchDestinationList.map(eachDestination => (
            <DestinationItem
              destinationDetail={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
