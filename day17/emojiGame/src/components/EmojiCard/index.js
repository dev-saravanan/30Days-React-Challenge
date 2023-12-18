import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onSelectEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => onSelectEmoji(id)

  return (
    <li className="each-emoji">
      <button className="each-emoji-btn" type="button" onClick={onClickEmoji}>
        <img className="each-emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
