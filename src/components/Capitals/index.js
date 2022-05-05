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
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  changeCountry = event => this.setState({activeCapitalId: event.target.value})

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryName = countryAndCapitalsList.filter(
      eachCountry => activeCapitalId === eachCountry.id,
    )

    return activeCountryName[0]
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="drop-down-container">
            <select
              className="drop-down"
              onChange={this.changeCountry}
              value={country.id}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which Country?</p>
          </div>
          <p className="country">{country.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
