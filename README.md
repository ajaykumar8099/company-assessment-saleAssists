In this project, I build a **Feedback App** by applying the concepts that are given by Company.

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/feedback-app-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Feedback Question](https://assets.ccbp.in/frontend/content/react-js/feedback-app-question-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Thank You Screen](https://assets.ccbp.in/frontend/content/react-js/feedback-app-summary-lg-output-v2.png)
</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
- install `npm axios`
- additionally install `npm install react-loader-spinner@4.0.0`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When Page is Opened, then make an API Call using axios.get method
- update the state using useState of method with responseData to feedackData, pass this feedackData to FeedbackItem Component   
- The `FeedbackItem` component receives the `feedackDetails` as a prop. It consists of the following properties
- in additionally used react-loader-spinner to show loading while api is fetching

  |     Key      |    Data Type     |
  | :----------: | :--------------: |

  |    Name   | String |
  | Company |      String      |
  | Rating |      Number      |
  | dateCreated |      String     |
  | Reviews |      String     |
  | platform |      String     |
  

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Used these files to complete the implementation:

- `src/components/Feedback/index.js`
- `src/components/Feedback/index.css`
- `src/components/FeedbackItem/index.js`
- `src/components/FeedbackItem/index.css`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

 - installed npm -axios to fetch the Api Data 
 - used async and await for consuming the response data while api fetching 

</details>

<details>
<summary>Api call</summary>
<br/>
- `https://admin.tomedes.com/api/v1/get-reviews?page=1`
</details>


<details>
<summary>Font-families</summary>

- Roboto
- Caveat 
- Bree Serif

</details>

> ### _Things to Keep in Mind_
>
> - All components implemented in the `src/components` directory.
