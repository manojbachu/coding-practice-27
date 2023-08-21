// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()

    const {password, username} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess()
    }
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="user-login-page-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          className="website-login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />

        <form className="form-container" onSubmit={this.submitForm}>
          <img
            className="form-website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="input-container">
            <label htmlFor="username" className="input-label">
              USERNAME
            </label>
            <input
              onChange={this.onChangeUsername}
              id="username"
              className="input"
              type="text"
              value={username}
              placeholder="username"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">
              PASSWORD
            </label>
            <input
              onChange={this.onChangePassword}
              id="password"
              className="input"
              type="password"
              value={password}
              placeholder="username"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
