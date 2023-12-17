import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Comments Starts

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          console.log('State Changed')
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onChangeNameInput = event => this.setState({nameInput: event.target.value})

  onChangeCommentInput = event =>
    this.setState({commentInput: event.target.value})

  onAddComment = event => {
    event.preventDefault()

    const {nameInput, commentInput} = this.state
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      initialBg:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ],
      isLiked: false,
    }

    this.setState(prevState => {
      const {commentsList} = prevState
      return {
        nameInput: '',
        commentInput: '',
        commentsList: [...commentsList, newComment],
      }
    })
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const updatedCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: updatedCommentsList})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="bg-container">
        <h1 className="comments-heading">Comments</h1>
        <div className="form-img-container">
          <div className="form-container">
            <p className="description-text">
              Say something about 4.0 Technologies
            </p>
            <form className="form" onSubmit={this.onAddComment}>
              <input
                className="name-input"
                type="text"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                className="comment-input"
                placeholder="Your Comment"
                value={commentInput}
                onChange={this.onChangeCommentInput}
              />
              <button className="add-comment-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <div className="img-container">
            <img
              className="comment-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
            />
          </div>
        </div>
        <div className="comments-container">
          <p className="comments-count-text">
            <span className="comments-count">{commentsList.length}</span>{' '}
            Comments
          </p>
          {/* Comment Item */}
          <ul className="comments-list-container">
            {commentsList.map(eachComment => (
              <CommentItem
                commentDetail={eachComment}
                toggleLike={this.toggleLike}
                deleteComment={this.deleteComment}
                key={eachComment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
