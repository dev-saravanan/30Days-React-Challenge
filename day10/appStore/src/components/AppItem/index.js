import './index.css'

const AppItem = props => {
  const {appDetails} = props

  return (
    <li className="app-item">
      <img
        className="app-img"
        src={appDetails.imageUrl}
        alt={appDetails.appName}
      />
      <p className="app-name">{appDetails.appName}</p>
    </li>
  )
}

export default AppItem
