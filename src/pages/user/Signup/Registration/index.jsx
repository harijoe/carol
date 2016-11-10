import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { postSignup } from './ducks'
import Form from '../../../../ui/form/Form'
import InputText from '../../../../ui/form/input/Text'
import InputRadio from '../../../../ui/form/input/Radio'
import InputEmail from '../../../../ui/form/input/Email'
import InputPassword from '../../../../ui/form/input/Password'
import InputPhone from '../../../../ui/form/input/Phone'
import InputPostal from '../../../../ui/form/input/Postal'
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
      gender: '',
      firstName: '',
      lastName: '',
      mobilePhone: '',
      zipCode: ''
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
      username: this.state.email,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobilePhone: this.state.mobilePhone,
      zipCode: this.state.zipCode
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
      case 'gender':
        this.setState({
          gender: e.target.value
        })

        break
      case 'firstName':
        this.setState({
          firstName: e.target.value
        })

        break
      case 'lastName':
        this.setState({
          lastName: e.target.value
        })

        break
      case 'mobilePhone':
        this.setState({
          mobilePhone: e.target.value
        })

        break
      case 'zipCode':
        this.setState({
          zipCode: e.target.value
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

    const attrGender1 = {
      className: 'gender',
      id: 'gender1',
      placeholder: 'Gender',
      name: 'gender',
      required: 'required'
    }

    const attrGender2 = {
      className: 'gender',
      id: 'gender2',
      placeholder: 'Gender',
      name: 'gender',
      required: 'required'
    }

    const attrFirstName = {
      className: 'firstName',
      id: 'firstName',
      placeholder: 'First name',
      name: 'firstName',
      required: 'required'
    }

    const attrLastName = {
      className: 'lastName',
      id: 'lastName',
      placeholder: 'Last name',
      name: 'lastName',
      required: 'required'
    }

    const attrPhone = {
      className: 'mobilePhone',
      id: 'mobilePhone',
      placeholder: 'Mobile phone number',
      name: 'mobilePhone',
      required: 'required'
    }

    const attrPostalcode = {
      className: 'zipCode',
      id: 'zipCode',
      placeholder: 'Postal code',
      name: 'zipCode',
      required: 'required'
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
              value={this.state.email}
              onChange={this.handleChange}
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
            <InputRadio
              attr={attrGender1}
              value="Mr"
              onChange={this.handleChange}
            />
            Mr
            <InputRadio
              attr={attrGender2}
              value="Mrs"
              onChange={this.handleChange}
            />
            Mrs
          </div>
          <div className="form-group">
            <InputText
              attr={attrFirstName}
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputText
              attr={attrLastName}
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputPhone
              attr={attrPhone}
              value={this.state.mobilePhone}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <InputPostal
              attr={attrPostalcode}
              value={this.state.zipCode}
              onChange={this.handleChange}
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
  return bindActionCreators({
    submit: (data) => {
      return () => {
        dispatch(postSignup(data))
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
