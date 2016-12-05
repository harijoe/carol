import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import { FormattedMessage } from 'react-intl'
import Login from '../../containers/user/Login'
import Menu from '../Menu'
import { logout } from '../../services/auth/ducks'
import { isAuthenticated } from '../../utils/auth'

class MenuLogin extends Component {
  constructor() {
    super()

    this.logoutAndRedirect = this.logoutAndRedirect.bind(this)
  }

  logoutAndRedirect(e) {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(logout())
    dispatch(push('/'))
  }

  render() {
    const { location, auth } = this.props

    // On login page?
    if (location && location.pathname && ('/login' === location.pathname)) {
      return null
    }

    // Logged?
    if (!isAuthenticated(auth.get('grantType'))) {
      return (
        <Menu label="login">
          <Login />
        </Menu>
      )
    }

    return (
      <Menu label="user.my_account">
        <ul>
          <li><Link to="/project"><FormattedMessage id="user.my_project" /></Link></li>
          <li><Link to="/profile"><FormattedMessage id="user.my_account" /></Link></li>
          <li><Link to="/message"><FormattedMessage id="user.messaging" /></Link></li>
          <li><a href="" onClick={this.logoutAndRedirect}><FormattedMessage id="user.log_out" /></a></li>
        </ul>
      </Menu>
    )
  }
}

MenuLogin.propTypes = {
  auth: React.PropTypes.object,
  location: React.PropTypes.object,
  logoutAndRedirect: React.PropTypes.func,
  dispatch: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(MenuLogin)
