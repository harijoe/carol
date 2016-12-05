import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import { addNotification as notify } from 'reapop'
import { postResetPassword } from './ducks'
import Form from '../../../ui/form/Form'
import InputPassword from '../../../ui/form/input/Password'
import Button from '../../../ui/form/input/Button'
import messages from '../../../utils/messages'

class ResetPassword extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      error: '',
      password: '',
      confirmPassword: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.resetPassword && 204 === nextProps.resetPassword.status) {
      this.props.notify({
        title: this.props.intl.formatMessage(messages('user.thank_you').label),
        message: this.props.intl.formatMessage(messages('user.reset_password_success').label),
        status: 'success',
        dismissible: true,
        dismissAfter: 6000
      })
    }
  }

  setError(error = null) {
    this.setState({
      error
    })
  }

  handleSubmit() {
    this.setError()
    if (this.state.password !== this.state.confirmPassword) {
      return this.setError('Passwords do not match')
    }

    return this.props.postResetPassword({
      password: this.state.password,
      tokenResetPassword: this.props.location.query.token
    })
  }

  handleChange(e) {
    switch (e.target.id) {
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
    const attrPassword = {
      className: 'password',
      id: 'password',
      placeholder: 'password',
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
            { this.props.auth.get('error') } <br />
            { this.state.error }
          </div>
          <div className="form-group">
            <InputPassword
              attr={attrPassword}
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputPassword
              attr={attrConfirmPassword}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <Button type="submit" value="user.send" />
          </div>
        </Form>
      </div>
    )
  }
}

ResetPassword.propTypes = {
  resetPassword: React.PropTypes.shape({
    error: React.PropTypes.string
  }),
  auth: React.PropTypes.object,
  postResetPassword: React.PropTypes.func,
  location: React.PropTypes.object,
  notify: React.PropTypes.func,
  intl: intlShape.isRequired,
}

function mapStateToProps(state) {
  return {
    resetPassword: state.resetPassword,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { postResetPassword, notify })(injectIntl(ResetPassword))
