import './index.css'

const HistoryItem = props => {
  const {historyDetail, onDeleteHistory} = props

  const onClickDeleteIcon = () => onDeleteHistory(historyDetail.id)

  return (
    <li className="history-item-container">
      <p className="history-time">{historyDetail.timeAccessed}</p>
      <div className="inner-container">
        <div className="logo-text-container">
          <img
            className="history-logo"
            src={historyDetail.logoUrl}
            alt="domain logo"
          />
          <div className="history-text">
            <p className="history-title">{historyDetail.title}</p>
            <p className="history-url">{historyDetail.domainUrl}</p>
          </div>
        </div>
        <button
          className="delete-button"
          type="button"
          onClick={onClickDeleteIcon}
          data-testid="delete"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
