import './index.css'
import {Component} from 'react'

class DenominationItem extends Component {
  render() {
    const {denominationItem, onWithdrawal} = this.props

    const updateBalance = () => onWithdrawal(denominationItem.id)

    return (
      <li className="denomination-container">
        <button
          type="button"
          className="denomination-text"
          onClick={updateBalance}
        >
          {denominationItem.value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
