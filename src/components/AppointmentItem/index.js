// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, isToggleFavorite} = props
  const {id, title, date, isFavorite} = appointmentDetails
  const starImageUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStarButton = () => {
    isToggleFavorite(id)
  }

  return (
    <li className="list-item">
      <div className="title-star-container">
        <p className="title">{title}</p>
        <button
          className="star-button"
          data-testId="star"
          type="button"
          onClick={onClickStarButton}
        >
          <img className="star-image" alt="star" src={starImageUrl} />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
