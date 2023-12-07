import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balanceAmount: 2000}

  withdrawAmount = denominationId => {
    const {balanceAmount} = this.state
    let updatedAmount

    if (denominationId === 1) {
      updatedAmount = balanceAmount - 50
    } else if (denominationId === 2) {
      updatedAmount = balanceAmount - 100
    } else if (denominationId === 3) {
      updatedAmount = balanceAmount - 200
    } else {
      updatedAmount = balanceAmount - 500
    }

    this.setState({balanceAmount: updatedAmount})
  }

  render() {
    const {denominationsList} = this.props
    let {balanceAmount} = this.state

    balanceAmount = balanceAmount > 0 ? balanceAmount : 0

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <div className="icon-container">
              <h1>S</h1>
            </div>
            <h1 className="name-text">Saravanan K</h1>
          </div>

          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="amount-container">
              <p className="balance-amount">{balanceAmount}</p>
              <p className="amount-text">in Rupees</p>
            </div>
          </div>

          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="withdraw-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  denominationItem={eachDenomination}
                  onWithdrawal={this.withdrawAmount}
                  key={eachDenomination.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
