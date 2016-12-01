import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { callApiUserCreate } from './ducks'
import Form from '../../../../ui/form/Form'
import InputEmail from '../../../../ui/form/input/Email'
import InputPassword from '../../../../ui/form/input/Password'
import Button from '../../../../ui/form/input/Button'
import './signup.scss'
import FormatError from '../../../../ui/Errors'

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

    return this.props.submit({
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
  submit: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    signup: state.signup,
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submit: (data) => {
      return () => {
        dispatch(callApiUserCreate(data))
          .then((response) => {
            if (response && 201 === response.status) {
              dispatch(push('/signup-confirmation'))
            }
          })
      }
    }
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
