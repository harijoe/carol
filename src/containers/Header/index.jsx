import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import './header.scss'
import MenuLogin from '../MenuLogin'
import MenuBurger from '../MenuBurger'
import Country from '../Country'

function Header() {
  return (
    <header>
      <ul>
        <li><MenuBurger /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Site search</Link></li>
        <li><MenuLogin /></li>
        <li><Country /></li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  user: React.PropTypes.object,
  header: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    user: state.user,
    header: state.header
  }
}

export default connect(mapStateToProps)(Header)
