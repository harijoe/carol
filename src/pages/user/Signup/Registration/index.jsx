import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { callApiUserCreate } from './ducks'
import Form from '../../../../ui/form/Form'
import InputText from '../../../../ui/form/input/Text'
import InputRadio from '../../../../ui/form/input/Radio'
import InputEmail from '../../../../ui/form/input/Email'
import InputPassword from '../../../../ui/form/input/Password'
import InputPhone from '../../../../ui/form/input/Phone'
import InputPostal from '../../../../ui/form/input/Postal'
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
      confirmPassword: '',
      gender: '',
      firstName: '',
      lastName: '',
      mobilePhone: '',
      postalCode: ''
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
      password: this.state.password,
      gender: this.state.gender,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobilePhone: this.state.mobilePhone,
      postalCode: this.state.postalCode
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
      case 'postalCode':
        this.setState({
          postalCode: e.target.value
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
      placeholder: 'user.first_name',
      name: 'firstName',
      required: 'required'
    }

    const attrLastName = {
      className: 'lastName',
      id: 'lastName',
      placeholder: 'user.last_name',
      name: 'lastName',
      required: 'required'
    }

    const attrPhone = {
      className: 'mobilePhone',
      id: 'mobilePhone',
      placeholder: 'user.mobile_phone',
      name: 'mobilePhone',
      required: 'required'
    }

    const attrPostalcode = {
      className: 'postalCode',
      id: 'postalCode',
      placeholder: 'user.postal_code',
      name: 'postalCode',
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
            <InputRadio
              attr={attrGender1}
              value="Mr"
              text="user.mr"
              onChange={this.handleChange}
            />
            <InputRadio
              attr={attrGender2}
              value="Mrs"
              text="user.mrs"
              onChange={this.handleChange}
            />
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
              value={this.state.postalCode}
              onChange={this.handleChange}
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
