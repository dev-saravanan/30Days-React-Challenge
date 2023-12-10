import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCountry: countryAndCapitalsList[0].country}

  findCountry = event => {
    const countryValue = event.target.value
    this.setState({activeCountry: countryValue})
  }

  render() {
    const {activeCountry} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-text">Countries and Capitals</h1>
          <div className="select-text-container">
            <select
              className="select-item"
              name="capitals"
              onChange={this.findCountry}
            >
              {countryAndCapitalsList.map(eachObj => (
                <option value={eachObj.country} key={eachObj.id}>
                  {eachObj.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="select-capital-description">
              is the capital of which country?
            </p>
          </div>
          <p className="country-text">{activeCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
