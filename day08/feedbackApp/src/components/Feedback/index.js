import './index.css'
import {Component} from 'react'

const Emojis = props => {
  const {emojiObject, submitFeedback} = props
  const {name, imageUrl} = emojiObject

  return (
    <li className="each-emoji-container">
      <img
        onClick={submitFeedback}
        className="emoji-img"
        src={imageUrl}
        alt={name}
      />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

const ThankYouScreen = props => {
  const {loveEmojiUrl} = props

  return (
    <div className="thank-you-container">
      <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
      <h1 className="thank-you-heading">Thank You!</h1>
      <p className="thank-you-description">
        We will use your feedback to improve our customer support perfomance
      </p>
    </div>
  )
}

class Feedback extends Component {
  state = {isFeedbackSubmitted: false}

  submitFeedback = () => this.setState({isFeedbackSubmitted: true})

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackSubmitted} = this.state

    let feedbackElement

    if (isFeedbackSubmitted) {
      feedbackElement = <ThankYouScreen loveEmojiUrl={loveEmojiUrl} />
    } else {
      feedbackElement = (
        <div className="emoji-card-container">
          <h1 className="emoji-card-heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emojis-container">
            {emojis.map(eachEmoji => (
              <Emojis
                emojiObject={eachEmoji}
                submitFeedback={this.submitFeedback}
                key={eachEmoji.id}
              />
            ))}
          </ul>
        </div>
      )
    }

    return <div className="bg-container">{feedbackElement}</div>
  }
}

export default Feedback
