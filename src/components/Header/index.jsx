import React from 'react'
import { Link } from 'react-router'
import './header.scss'

function Header() {
  return (
    <header>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/content">Content</Link></li>
        <li><Link to="/profile">My account info</Link></li>
      </ul>
    </header>
  )
}

export default Header
