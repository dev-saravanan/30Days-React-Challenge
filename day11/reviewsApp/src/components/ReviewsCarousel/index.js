import './index.css'
import {Component} from 'react'

class ReviewCarousel extends Component {
  state = {currentReview: 0}

  goForward = () => {
    this.setState(prevState => {
      if (prevState.currentReview === 3) {
        return {currentReview: prevState.currentReview}
      }
      return {currentReview: prevState.currentReview + 1}
    })
  }

  goBackward = () => {
    this.setState(prevState => {
      if (prevState.currentReview === 0) {
        return {currentReview: prevState.currentReview}
      }
      return {currentReview: prevState.currentReview - 1}
    })
  }

  render() {
    const {currentReview} = this.state
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[
      currentReview
    ]

    return (
      <div className="bg-container">
        <h1 className="heading-text">Reviews App</h1>
        <div className="reviews-container">
          <button
            data-testid="leftArrow"
            className="arrow-btn"
            type="button"
            onClick={this.goBackward}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
            />
          </button>
          <div className="reviews-text-container">
            <img src={imgUrl} className="profile-img" alt={username} />
            <p className="name-text">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="review-text">{description}</p>
          </div>
          <button
            data-testid="rightArrow"
            className="arrow-btn"
            type="button"
            onClick={this.goForward}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
