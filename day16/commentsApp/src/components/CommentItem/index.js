import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetail, toggleLike, deleteComment} = props
  const {name, comment, isLiked, initialBg} = commentDetail

  const onClickLike = () => toggleLike(commentDetail.id)

  const onDelete = () => deleteComment(commentDetail.id)

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeActiveCls = isLiked ? 'like-btn-active' : ''

  return (
    <li className="main-container">
      <div className="name-comment-container">
        <div className={`initial-container ${initialBg}`}>
          <p className="initial-text">{name[0]}</p>
        </div>
        <div className="inner-name-comment-container">
          <div className="name-container">
            <p className="name-text">{name}</p>
            <p className="time-text">
              {formatDistanceToNow(commentDetail.date)} ago
            </p>
          </div>
          <div className="comment-container">
            <p className="comment-text">{comment}</p>
          </div>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-img-txt-container">
          <img className="like-img" src={likeImg} alt="like" />
          <button
            className={`like-btn ${likeActiveCls}`}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          onClick={onDelete}
          className="delete-btn"
          type="button"
          data-testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
