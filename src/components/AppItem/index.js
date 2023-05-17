import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appId, appName, imageUrl, category} = appItem

  return (
    <li className="app-list-elements">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
