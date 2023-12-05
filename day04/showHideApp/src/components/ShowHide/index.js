import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    isFirstNameHidden: true,
    isLastNameHidden: true,
  }

  showHideFirstName = () =>
    this.setState(prevState => ({
      isFirstNameHidden: !prevState.isFirstNameHidden,
    }))

  showHideLastName = () =>
    this.setState(prevState => ({
      isLastNameHidden: !prevState.isLastNameHidden,
    }))

  render() {
    const {isFirstNameHidden, isLastNameHidden} = this.state

    const showFirstName = () => {
      if (!isFirstNameHidden) {
        return (
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showHideFirstName}
            >
              Show/Hide Firstname
            </button>
            <div className="name">
              <p className="name-text">Joe</p>
            </div>
          </div>
        )
      }
      return (
        <div className="name-container">
          <button
            className="button"
            type="button"
            onClick={this.showHideFirstName}
          >
            Show/Hide Firstname
          </button>
        </div>
      )
    }

    const showLastName = () => {
      if (!isLastNameHidden) {
        return (
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showHideLastName}
            >
              Show/Hide Lastname
            </button>
            <div className="name">
              <p className="name-text">Jonas</p>
            </div>
          </div>
        )
      }
      return (
        <div className="name-container">
          <button
            className="button"
            type="button"
            onClick={this.showHideLastName}
          >
            Show/Hide Lastname
          </button>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <h1 className="heading-text">Show/Hide</h1>
        <div className="names-bg-container">
          {showFirstName()}
          {showLastName()}
        </div>
      </div>
    )
  }
}

export default ShowHide
