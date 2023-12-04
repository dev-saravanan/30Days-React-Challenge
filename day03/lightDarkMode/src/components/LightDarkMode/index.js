import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  changeMode = () =>
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))

  render() {
    const {isLightMode} = this.state

    const renderElement = () => {
      if (isLightMode === true) {
        return (
          <div className="container light-container">
            <h1 className="light-heading">Click to Change Mode</h1>
            <button type="button" className="button" onClick={this.changeMode}>
              Dark Mode
            </button>
          </div>
        )
      }
      return (
        <div className="container dark-container">
          <h1 className="dark-heading">Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.changeMode}>
            Light Mode
          </button>
        </div>
      )
    }

    return <div className="bg-container">{renderElement()}</div>
  }
}

export default LightDarkMode
