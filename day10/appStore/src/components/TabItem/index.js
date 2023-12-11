import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, changeTab} = props

  const activeTabClass = tabDetails.tabId === activeTabId ? 'active-tab' : ''

  const onClickChangeTab = () => changeTab(tabDetails.tabId)

  return (
    <li className="tab-item">
      <button
        onClick={onClickChangeTab}
        className={`tab-button ${activeTabClass}`}
        type="button"
      >
        {tabDetails.displayText}
      </button>
    </li>
  )
}

export default TabItem
