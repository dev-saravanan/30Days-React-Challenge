import './index.css'

const AppointmentItem = props => {
  const {appointmentDetail, onClickUpdateStar} = props

  const changeStar = () => onClickUpdateStar(appointmentDetail.id)

  const starImgUrl = appointmentDetail.isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="item-container">
      <div className="title-star-container">
        <p className="title-text">{appointmentDetail.title}</p>
        <button className="star-btn" type="button" data-testid="star">
          <img
            className="star-img"
            src={starImgUrl}
            alt="star"
            onClick={changeStar}
          />
        </button>
      </div>
      <p className="date-text">Date: {appointmentDetail.date}</p>
    </li>
  )
}

export default AppointmentItem
