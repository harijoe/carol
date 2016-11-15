import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { postForgotPassword } from './ducks'
import Form from '../../../ui/form/Form'
import InputEmail from '../../../ui/form/input/Email'
import Button from '../../../ui/form/input/Button'

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
    }

    if (nextProps.forgotpassword && nextProps.forgotpassword.error) {
      this.setState({
        error: nextProps.forgotpassword.error
      })
    }
  }

  handleSubmit() {
    return this.props.submit({
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
      placeholder: 'Email',
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
            <Button type="submit" value="Send" />
          </div>
        </Form>
      </div>
    )
  }
}

ForgotPassword.propTypes = {
  forgotpassword: React.PropTypes.shape({
    error: React.PropTypes.string
  }),
  auth: React.PropTypes.object,
  submit: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    forgotpassword: state.forgotpassword,
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submit: (data) => {
    return () => {
      dispatch(postForgotPassword(data))
        .then((response) => {
          if (response && 204 === response.status) {
            dispatch(push('/forgot-password-confirmation'))
          }
        })
    }
  } }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
