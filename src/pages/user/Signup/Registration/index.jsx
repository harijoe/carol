import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { postSignup } from './ducks'
import Form from '../../../../ui/form/Form'
import InputEmail from '../../../../ui/form/input/Email'
import InputPassword from '../../../../ui/form/input/Password'
import InputPhone from '../../../../ui/form/input/Phone'
import Button from '../../../../ui/form/input/Button'
import './signup.scss'

class Signup extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      error: null,
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
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
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone
    })
  }

  handleChange(e) {
    switch (e.target.id) {
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
      case 'phone':
        this.setState({
          phone: e.target.value
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

    const attrPassword = {
      className: 'password',
      id: 'password',
      placeholder: 'Password',
      name: 'password',
      required: 'required'
    }

    const attrConfirmPassword = {
      className: 'confirmPassword',
      id: 'confirmPassword',
      placeholder: 'Confirm your password',
      name: 'confirmPassword',
      required: 'required'
    }

    const attrPhone = {
      className: 'phone',
      id: 'phone',
      placeholder: 'Phone number',
      name: 'phone'
    }

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <div className="error">
            { this.props.auth.get('error') } <br />
            { this.props.signup.get('error') } <br />
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
            <InputPhone
              attr={attrPhone}
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </div>
          <div className="form-group">
            <Button type="submit" value="Signup" />
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
  return bindActionCreators({ submit: (data) => {
    return () => {
      dispatch(postSignup(data))
        .then((response) => {
          if (response && 201 === response.status) {
            dispatch(push('/signup-confirmation'))
          }
        })
    }
  } }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
