import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { postResetPassword } from './ducks'
import Form from '../../../ui/form/Form'
import InputPassword from '../../../ui/form/input/Password'
import Button from '../../../ui/form/input/Button'

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

    return this.props.submit({
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
  resetpassword: React.PropTypes.shape({
    error: React.PropTypes.string
  }),
  auth: React.PropTypes.object,
  submit: React.PropTypes.func,
  location: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    resetpassword: state.resetpassword,
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submit: (data) => {
    return () => {
      dispatch(postResetPassword(data))
        .then((response) => {
          if (response && 204 === response.status) {
            dispatch(push('/reset-password-confirmation'))
          }
        })
    }
  } }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
