/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {selectedEmojis: [], emojiExists: false, score: 0, topScore: 0}

  onSelectEmoji = emojiId => {
    const {emojisList} = this.props
    const {selectedEmojis} = this.state

    const currentEmoji = emojisList.find(eachEmoji => eachEmoji.id === emojiId)

    if (selectedEmojis.includes(currentEmoji)) {
      this.setState({selectedEmojis: [], emojiExists: true})
    } else if (selectedEmojis.length === 11) {
      this.setState({selectedEmojis: [], emojiExists: true, score: 12})
    } else {
      this.setState(prevState => ({
        selectedEmojis: [...prevState.selectedEmojis, currentEmoji],
        score: prevState.score + 1,
      }))
    }
  }

  onPlayAgain = () => {
    this.setState(prevState => {
      const {score, topScore} = prevState
      const updatedTopScore = score > topScore ? score : topScore

      return {
        selectedEmojis: [],
        emojiExists: false,
        score: 0,
        topScore: updatedTopScore,
      }
    })
  }

  render() {
    const {emojiExists, score, topScore} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const renderEmojis = () => {
      const emojiList = shuffledEmojisList()

      return emojiList.map(eachEmoji => (
        <EmojiCard
          key={eachEmoji.id}
          emojiDetails={eachEmoji}
          onSelectEmoji={this.onSelectEmoji}
        />
      ))
    }

    const contentElement = emojiExists ? (
      <WinOrLoseCard score={score} onPlayAgain={this.onPlayAgain} />
    ) : (
      <ul className="emojis-container">{renderEmojis()}</ul>
    )

    return (
      <div className="main-bg-container">
        <NavBar emojiExists={emojiExists} score={score} topScore={topScore} />
        <div className="content-container">{contentElement}</div>
      </div>
    )
  }
}

export default EmojiGame
