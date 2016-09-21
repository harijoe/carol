import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import login from '../../actions/user/login'
import Input from '../../components/form/Input'

class Login extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onClickLogin = this.onClickLogin.bind(this)
    this.state = {
      valueUsername: '',
      valuePassword: ''
    }
  }

  onClickLogin() {
    this.props.login({
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
    let error = ''

    if (this.props.auth && this.props.auth.error) {
      error = this.props.auth.error
    }

    const attrUsername = {
      className: 'username',
      id: 'username',
      placeholder: 'Username',
      name: 'username',
      type: 'text'
    }
    const attrPassword = {
      className: 'password',
      id: 'password',
      placeholder: 'Password',
      type: 'password',
      name: 'password'
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
        <br />
        { error }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

Login.propTypes = {
  login: React.PropTypes.func,
  auth: React.PropTypes.object
}

Login.contextTypes = {
  router: React.PropTypes.object
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login)
