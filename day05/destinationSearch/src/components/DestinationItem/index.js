import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {destinationDetail} = this.props

    return (
      <li className="item-container">
        <img
          className="item-img"
          src={destinationDetail.imgUrl}
          alt={destinationDetail.name}
        />
        <p className="item-name">{destinationDetail.name}</p>
      </li>
    )
  }
}

export default DestinationItem
