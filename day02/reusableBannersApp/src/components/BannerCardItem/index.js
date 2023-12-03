import './index.css'

const BannerCardItem = props => {
  const {cardDetailObj} = props
  const {headerText, description, className} = cardDetailObj
  return (
    <li className={`card-container ${className}`}>
      <div className="card">
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button type="submit" className="card-button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
