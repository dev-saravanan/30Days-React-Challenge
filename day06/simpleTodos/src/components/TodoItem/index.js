import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {todoDetails, deleteTodo} = this.props

    const onDelete = () => deleteTodo(todoDetails.id)

    return (
      <li className="each-todo-container">
        <p className="each-todo-text">{todoDetails.title}</p>
        <button className="delete-btn" type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
