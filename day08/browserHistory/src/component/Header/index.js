import './index.css'

const Header = props => {
  const {searchHistory} = props

  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
        className="logo-img"
        alt="app logo"
      />
      <div className="search-container">
        <div className="search-icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            className="search-icon"
            alt="search"
          />
        </div>
        <input
          className="search-input"
          type="search"
          placeholder="Search History"
          onChange={searchHistory}
        />
      </div>
    </div>
  )
}

export default Header
