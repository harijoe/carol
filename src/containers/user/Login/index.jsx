import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { login } from '../../../services/auth/ducks'
import InputEmail from '../../../ui/form/input/Email'
import InputPassword from '../../../ui/form/input/Password'
import Button from '../../../ui/form/input/Button'
import Form from '../../../ui/form/Form'
import FormatError from '../../../ui/Errors'

class Login extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onSubmitLogin = this.onSubmitLogin.bind(this)

    this.state = {
      valueUsername: '',
      valuePassword: ''
    }
  }

  componentWillMount() {
    const username = this.props.location ? this.props.location.query.username : null

    if (username) {
      this.setState({
        valueUsername: username
      })
    }
  }

  onSubmitLogin() {
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
    const attrUsername = {
      className: 'username',
      id: 'username',
      name: 'username',
      required: 'required'
    }

    const attrPassword = {
      className: 'password',
      id: 'password',
      name: 'password',
      required: 'required'
    }

    return (
      <Form onSubmit={this.onSubmitLogin}>
        <InputEmail
          attr={attrUsername}
          onChange={this.handleChange}
          value={this.state.valueUsername}
        />
        <InputPassword
          attr={attrPassword}
          value={this.state.valuePassword}
          onChange={this.handleChange}
          checkPattern={false}
        />
        <br />
        <Button type="submit" value="user.sign_in" />
        <FormatError errors={this.props.auth.get('errors')} />
        <div>
          <Link to="/forgot-password"><FormattedMessage id="user.forget_password" /></Link>
        </div>
        <div>
          <Link to="/signup" state={{ redirectPathname: this.props.redirectPathname }}><FormattedMessage id="user.create_account" /></Link>
        </div>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    user: state.user
  }
}

Login.propTypes = {
  login: React.PropTypes.func,
  auth: React.PropTypes.object,
  user: React.PropTypes.object,
  location: React.PropTypes.object,
  redirectPathname: React.PropTypes.string,
}

export default connect(mapStateToProps, { login })(Login)
