// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="welcome-page-bg-container">
        <div className="welcome-page-container">
          <h1 className="welcome-heading">Welcome</h1>
          <p className="geeting">Thank you!Happy Learning</p>
          <button
            type="button"
            onClick={this.onClickSubscribe}
            className="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
