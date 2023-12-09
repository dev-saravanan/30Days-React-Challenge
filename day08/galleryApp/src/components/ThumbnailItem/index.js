import './index.css'

const ThumbnailItem = props => {
  const {imageDetailObj, onClickChangeImg, isActive} = props

  const changeImage = () => onClickChangeImg(imageDetailObj)

  const activeImageStyle = isActive ? 'active-img' : ''

  return (
    <li className="thumbnails">
      <button onClick={changeImage} type="button" className="button">
        <img
          className={`thumbnail-img ${activeImageStyle}`}
          src={imageDetailObj.thumbnailUrl}
          alt={imageDetailObj.thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
