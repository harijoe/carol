import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import postSignup from '../../actions/user/signup'
import Form from '../../components/form/Form'
import Input from '../../components/form/Input'
import Button from '../../components/form/Button'
import './signup.scss'

class Signup extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      errors: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signup) {
      this.setState({ signup: null })
      this.context.router.push({ pathname: '/signup-confirmation' })
    }

    if (nextProps.auth && nextProps.auth.error) {
      this.setState({
        errors: nextProps.auth.error
      })
    }
  }

  handleSubmit() {
    if (this.state.password !== this.state.confirmPassword) {
      return this.setState({
        errors: 'Passwords do not match'
      })
    }

    return this.props.postSignup({
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
      type: 'email',
      required: 'required'
    }

    const attrPassword = {
      className: 'password',
      id: 'password',
      placeholder: 'Password',
      name: 'password',
      type: 'password',
      required: 'required'
    }

    const attrConfirmPassword = {
      className: 'confirmPassword',
      id: 'confirmPassword',
      placeholder: 'Confirm your password',
      name: 'confirmPassword',
      type: 'password',
      required: 'required'
    }

    const attrPhone = {
      className: 'phone',
      id: 'phone',
      placeholder: 'Phone number',
      pattern: '^([0|+[0-9]{1,5})?([1-9][0-9]{9})$',
      name: 'phone',
      type: 'text'
    }

    return (
      <div className="signup">
        <Form onSubmit={this.handleSubmit}>
          <div className="error">
            { this.state.errors }
          </div>
          <div className="form-group">
            <Input
              attr={attrEmail}
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <Input
              attr={attrPassword}
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              attr={attrConfirmPassword}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <Input
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
  auth: React.PropTypes.shape({
    error: React.PropTypes.string
  }),
  postSignup: React.PropTypes.func
}

Signup.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    signup: state.signup,
    auth: state.auth
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ postSignup }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Signup)
