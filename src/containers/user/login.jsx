import { Link } from 'react-router'
import React, { Component } from 'react'
import login from '../../actions/user/login'
import Input from '../../components/input'

class Login extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onClickLogin = this.onClickLogin.bind(this)
    this.state = {
      valueUsername: '',
      valuePassword: '',
    }
  }

  onClickLogin() {
    login({
      username: this.state.valueUsername,
      password: this.state.valuePassword
    })
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'username':
        this.setState({
          valueUsername: event.target.value
        })
        break
      case 'password':
        this.setState({
          valuePassword: event.target.value
        })
        break
      default:
        return
    }
  }

  render() {
    const attrUsername = {
      className: 'username',
      id: 'username',
      placeholder: 'Username',
      type: 'text'
    }
    const attrPassword = {
      className: 'password',
      id: 'password',
      placeholder: 'Password',
      type: 'password',
    }

    return (
      <div>
        <Input
          attr={attrUsername}
          handleChange={this.handleChange}
          value={this.state.valueUsername}
        />
        <Input
          attr={attrPassword}
          value={this.state.valuePassword}
          handleChange={this.handleChange}
        />
        <button
          onClick={this.onClickLogin}
          type="button"
        >
          Login
        </button>
        {/* {divError} */}
        <Link to="/">Back</Link>
      </div>
    )
  }
}

Login.propTypes = {
  login: React.PropTypes.func
}

export default Login
