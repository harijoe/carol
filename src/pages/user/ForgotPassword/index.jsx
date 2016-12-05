import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import { addNotification as notify } from 'reapop'
import { postData } from './ducks'
import Form from '../../../ui/form/Form'
import InputEmail from '../../../ui/form/input/Email'
import Button from '../../../ui/form/input/Button'
import messages from '../../../utils/messages'

class ForgotPassword extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      error: '',
      email: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.get('error')) {
      this.setState({
        error: nextProps.auth.get('error')
      })

      return
    }

    if (nextProps.forgotPassword && nextProps.forgotPassword.error) {
      this.setState({
        error: nextProps.forgotPassword.error
      })

      return
    }

    if (nextProps.forgotPassword && 204 === nextProps.forgotPassword.status) {
      this.props.notify({
        title: this.props.intl.formatMessage(messages('user.thank_you').label),
        message: this.props.intl.formatMessage(messages('user.reset_password_email').label),
        status: 'success',
        dismissible: true,
        dismissAfter: 6000
      })
    }
  }

  handleSubmit() {
    return this.props.postData({
      email: this.state.email
    })
  }

  handleChange(e) {
    switch (e.target.id) {
      case 'email':
        this.setState({
          email: e.target.value
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

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <div className="error">
            { this.state.error }
          </div>
          <div className="form-group">
            <InputEmail
              attr={attrEmail}
              onChange={this.handleChange}
              value={this.state.email}
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

ForgotPassword.propTypes = {
  forgotPassword: React.PropTypes.shape({
    error: React.PropTypes.string
  }),
  auth: React.PropTypes.object,
  postData: React.PropTypes.func,
  notify: React.PropTypes.func,
  intl: intlShape.isRequired,
}

function mapStateToProps(state) {
  return {
    forgotPassword: state.forgotPassword,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { postData, notify })(injectIntl(ForgotPassword))
