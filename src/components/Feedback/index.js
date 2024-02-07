import {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

import FeedbackItem from '../FeedbackItem'

import './index.css'

const Feedback = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedbackData, setFeedbackData] = useState([])

  useEffect(() => {
    const getApiData = async () => {
      try {
        const url = 'https://admin.tomedes.com/api/v1/get-reviews?page=1'
        const response = await axios.get(url)
        console.log(response) // to see the api response
        const responseData = response.data.data
        setFeedbackData(responseData)
        setIsLoading(false)
      } catch (error) {
        console.log(error.message) // to show error message
      }
    }
    getApiData()
  }, [])

  const loading = () => (
    <div>
      <Loader type="Hearts" color="red" height={70} width={70} />
    </div>
  )

  const resultData = () => (
    <ul className="un-list-container">
      {feedbackData.map(eachFeedback => (
        <FeedbackItem key={eachFeedback.Id} feedbackDetails={eachFeedback} />
      ))}
    </ul>
  )

  return (
    <div className="bg-container">
      <div className="sub-container">
        <h1 className="main-heading">What Our Customers Says</h1>
        {isLoading ? loading() : resultData()}
      </div>
    </div>
  )
}
export default Feedback
