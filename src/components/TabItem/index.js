import './index.css'

const TabItem = props => {
  const {tabItem, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabItem

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  const tabStyleClassName = isActive ? 'tab-style' : ''

  return (
    <li className="list-container">
      <button
        type="button"
        className={`button ${tabStyleClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
