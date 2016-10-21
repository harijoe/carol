import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import Login from '../../containers/user/Login'
import Menu from '../Menu'
import { logout } from '../../actions/user/login'

function MenuLogin(props) {
  if (!props.user.get('isLogged')) {
    return (
      <Menu label="Login">
        <Login />
      </Menu>
    )
  }

  return (
    <Menu label="My account">
      <ul>
        <li><Link to="/project">My Projects</Link></li>
        <li><Link to="/profile">My infos</Link></li>
        <li><Link to="/message">Messaging</Link></li>
        <li><a onClick={props.logoutAndRedirect}>log out</a></li>
      </ul>
    </Menu>
  )
}

MenuLogin.propTypes = {
  user: React.PropTypes.object,
  logoutAndRedirect: React.PropTypes.func
}

function logoutAndRedirect(dispatch) {
  dispatch(logout())
  dispatch(push('/'))
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logoutAndRedirect: () => {
      return () => {
        logoutAndRedirect(dispatch)
      }
    }
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuLogin)
