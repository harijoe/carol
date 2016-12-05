import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import { addNotification as notify } from 'reapop'
import { callApiCreateUser } from './ducks'
import { login } from '../../../../utils/auth'
import Form from '../../../../ui/form/Form'
import InputEmail from '../../../../ui/form/input/Email'
import InputPassword from '../../../../ui/form/input/Password'
import Button from '../../../../ui/form/input/Button'
import './signup.scss'
import FormatError from '../../../../ui/Errors'
import messages from '../../../../utils/messages'

class Signup extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetErrors = this.resetErrors.bind(this)

    this.state = {
      errors: [],
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signup && 201 === nextProps.signup.get('status')) {
      this.props.notify({
        title: this.props.intl.formatMessage(messages('user.thank_you').label),
        message: this.props.intl.formatMessage(messages('user.sign_up_confirmation').label),
        status: 'success',
        dismissible: true,
        dismissAfter: 6000
      })

      this.props.login({
        username: this.state.email,
        password: this.state.password
      })
    }
  }

  resetErrors() {
    this.setState({
      errors: []
    })
  }

  addError(error = null) {
    const errors = []

    if (error && !this.hasError(this.state.errors, error)) {
      errors.push(error)
    }

    this.setState({
      errors
    })
  }

  hasError(errors, error) {
    return errors.length && -1 < errors.indexOf[error]
  }

  handleSubmit() {
    this.resetErrors()

    if (this.state.password !== this.state.confirmPassword) {
      return this.addError('user.password_match_err')
    }

    return this.props.callApiCreateUser({
      username: this.state.email,
      email: this.state.email,
      password: this.state.password
    })
  }

  handleChange(e) {
    switch (e.target.name) {
      case 'email':
        this.setState({
          email: e.target.value
        })

        break
      case 'password':
        this.setState({
          password: e.target.value
        })

        break
      case 'confirmPassword':
        this.setState({
          confirmPassword: e.target.value
        })

        break
      default:
        return
    }
  }

  render() {
    const attrEmail = {
      className: 'email',
      id: 'email',
      name: 'email',
      required: 'required'
    }

    const attrPassword = {
      className: 'password',
      id: 'password',
      placeholder: 'user.password',
      name: 'password',
      required: 'required'
    }

    const attrConfirmPassword = {
      className: 'confirmPassword',
      id: 'confirmPassword',
      placeholder: 'user.confirm_password',
      name: 'confirmPassword',
      required: 'required'
    }

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <div className="error">
            <FormatError errors={this.props.signup.get('errors')} />
            <FormatError errors={this.state.errors} />
          </div>
          <div className="form-group">
            <InputEmail
              attr={attrEmail}
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputPassword
              attr={attrPassword}
              value={this.state.password}
              onChange={this.handleChange}
              checkPattern={false}
            />
          </div>
          <div className="form-group">
            <InputPassword
              attr={attrConfirmPassword}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              checkPattern={false}
            />
          </div>
          <div className="form-group">
            <Button type="submit" value="user.sign_up" />
          </div>
        </Form>
      </div>
    )
  }
}

Signup.propTypes = {
  signup: React.PropTypes.object,
  auth: React.PropTypes.object,
  callApiCreateUser: React.PropTypes.func,
  notify: React.PropTypes.func,
  intl: intlShape.isRequired,
  login: React.PropTypes.func,
}

function mapStateToProps(state) {
  return {
    signup: state.signup,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { callApiCreateUser, notify, login })(injectIntl(Signup))
