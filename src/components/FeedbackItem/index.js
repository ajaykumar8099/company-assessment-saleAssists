import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import {FaArrowUpRightFromSquare} from 'react-icons/fa6'
import {SlCalender} from 'react-icons/sl'
import './index.css'

const FeedbackItem = props => {
  const {feedbackDetails} = props
  const {Name, Platform, Reviews, rating, datecreated, link} = feedbackDetails

  const inputTimestamp = datecreated
  const dateObject = new Date(inputTimestamp)

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  const formattedDate = dateObject.toLocaleString('en-US', options)

  return (
    <li className="list-container">
      <div className="time-container">
        <img
          src="https://www.pngitem.com/pimgs/m/37-379121_quotation-mark-png-photo-quotation-mark-png-vector.png"
          alt="item-img"
          className="image"
        />
        <p className="time">
          <span className="span-calender">
            <SlCalender />
          </span>
          {formattedDate}
        </p>
      </div>
      <div className="review-container">
        <h1 className="review-heading">
          <span>
            <ImQuotesLeft />
          </span>
          {Reviews}
          <span>
            <ImQuotesRight />
          </span>
        </h1>
      </div>
      <div className="review-details-container">
        <div className="name-container">
          <h1 className="name-heading">- {Name}</h1>
        </div>
        <div className="sub-review-container">
          <div className="rating-container">
            <p className="rating">Rating: {rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
          <p className="rating-platform">
            <span className="span-rating-paltform">Rating on: </span>
            {Platform}
          </p>
        </div>
      </div>
      <a className="link" href={link}>
        Get More Here
        <span className="arrow">
          <FaArrowUpRightFromSquare />
        </span>
      </a>
    </li>
  )
}
export default FeedbackItem
