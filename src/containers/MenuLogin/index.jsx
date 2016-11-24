import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import { FormattedMessage } from 'react-intl'
import Login from '../../containers/user/Login'
import Menu from '../Menu'
import { logout } from '../../services/auth/ducks'

class MenuLogin extends Component {
  constructor() {
    super()

    this.logoutAndRedirect = this.logoutAndRedirect.bind(this)
  }

  logoutAndRedirect(e) {
    const { dispatch } = this.props

    e.preventDefault()

    dispatch(logout())
    dispatch(push('/'))
  }

  render() {
    const isLogged = () => {
      return 'password' !== this.props.auth.get('grantType')
    }

    if (isLogged()) {
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
  logoutAndRedirect: React.PropTypes.func,
  dispatch: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(MenuLogin)
