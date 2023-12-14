import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: '', getStarredList: false}

  onChangeTitle = event => {
    const newTitle = event.target.value
    this.setState({title: newTitle})
  }

  onChangeDate = event => {
    const newDate = event.target.value

    this.setState({date: newDate})
  }

  addAppointment = () => {
    const {title, date} = this.state
    const newDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
    const newAppointment = {
      id: uuidv4(),
      title,
      date: newDate,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onClickUpdateStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  viewStarred = () =>
    this.setState(prevState => ({getStarredList: !prevState.getStarredList}))

  render() {
    const {appointmentList, title, date, getStarredList} = this.state

    let finalAppointmentList
    let starBtnActiveCls

    if (getStarredList) {
      finalAppointmentList = appointmentList.filter(
        eachAppointment => eachAppointment.isStarred,
      )
      starBtnActiveCls = 'starred-active'
    } else {
      finalAppointmentList = appointmentList
      starBtnActiveCls = ''
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="add-appointment-container">
            <div className="text-container">
              <h1 className="heading-text">Add Appointments</h1>

              <div className="input-container">
                <label className="label-text" htmlFor="title">
                  TITLE
                </label>
                <input
                  value={title}
                  className="text-input"
                  id="title"
                  placeholder="Title"
                  type="text"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="input-container">
                <label className="label-text" htmlFor="date">
                  DATE
                </label>
                <input
                  value={date}
                  className="date-input"
                  id="date"
                  type="date"
                  onChange={this.onChangeDate}
                />
              </div>

              <button
                className="add-btn"
                type="button"
                onClick={this.addAppointment}
              >
                Add
              </button>
            </div>

            <div className="img-container">
              <img
                className="appointments-img"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          {/* Appointments List Container */}
          <div>
            <div className="appointment-list-container">
              <h1 className="appointment-list-heading">Appointments</h1>
              <button
                className={`star-filter-button ${starBtnActiveCls}`}
                type="button"
                onClick={this.viewStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-list-container">
              {finalAppointmentList.map(eachAppointment => (
                <AppointmentItem
                  appointmentDetail={eachAppointment}
                  onClickUpdateStar={this.onClickUpdateStar}
                  key={eachAppointment.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
