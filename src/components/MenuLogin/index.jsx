import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Login from '../../containers/user/Login'
import Menu from '../Menu'

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
        <li><Link to="/*">My infos</Link></li>
        <li><Link to="/message">Messaging</Link></li>
        <li><Link to="/*">log out</Link></li>
      </ul>
    </Menu>
  )
}

MenuLogin.propTypes = {
  user: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MenuLogin)
