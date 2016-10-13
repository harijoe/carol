import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton'
import login from '../../actions/user/login'
import InputEmail from '../../components/form/Input/InputEmail'
import InputPassword from '../../components/form/Input/InputPassword'
import Form from '../../components/form/Form'

class Login extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.onSubmitLogin = this.onSubmitLogin.bind(this)

    this.state = {
      valueUsername: '',
      valuePassword: ''
    }
  }

  componentWillMount() {
    const username = (this.props.location) ? this.props.location.query.username : null

    if (username) {
      this.setState({
        valueUsername: username
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth && 'password' === nextProps.auth.grantType) {
      this.context.router.push({ pathname: '/profile' })
    }
  }

  onSubmitLogin() {
    this.props.login({
      username: this.state.valueUsername,
      password: this.state.valuePassword
    })
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'username':
        this.setState({
          valueUsername: event.target.value
        })
        break
      case 'password':
        this.setState({
          valuePassword: event.target.value
        })
        break
      default:
        return
    }
  }

  render() {
    let error = ''

    if (this.props.auth && this.props.auth.error) {
      error = this.props.auth.error
    }

    const attrUsername = {
      className: 'username',
      id: 'username',
      placeholder: 'Username',
      name: 'username'
    }

    const attrPassword = {
      className: 'password',
      id: 'password',
      placeholder: 'Password',
      name: 'password'
    }

    return (
      <Form onSubmit={this.onSubmitLogin}>
        <InputEmail
          attr={attrUsername}
          onChange={this.handleChange}
          value={this.state.valueUsername}
        />
        <InputPassword
          attr={attrPassword}
          value={this.state.valuePassword}
          onChange={this.handleChange}
        />
        <br />
        <RaisedButton type="submit" label="Connexion" />
        { error }
        <div>
          <Link to="/forgot-password">Mot de passe oublié ?</Link>
        </div>
        <div>
          <Link to="/signup">Je veux créer un compte</Link>
        </div>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    user: state.user
  }
}

Login.propTypes = {
  login: React.PropTypes.func,
  auth: React.PropTypes.object,
  user: React.PropTypes.object,
  location: React.PropTypes.object
}

Login.contextTypes = {
  router: React.PropTypes.object
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
