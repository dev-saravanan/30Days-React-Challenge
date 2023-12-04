import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeSubscription = () =>
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <h1 className="welcome-text">Welcome</h1>
        <p className="thanking-text">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button
            className="button"
            type="button"
            onClick={this.changeSubscription}
          >
            Subscribed
          </button>
        ) : (
          <button
            className="button"
            type="button"
            onClick={this.changeSubscription}
          >
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
