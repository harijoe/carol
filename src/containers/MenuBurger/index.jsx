import React from 'react'
import { Link } from 'react-router'
import LinkPro from '../../containers/pro/LinkPro'
import Menu from '../Menu'

export default function MenuBurger () {
  return (
    <Menu label="Burger menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search-pro">Trouver un artisan</Link></li>
        <li><Link to="*">Ressources pour mes travaux</Link></li>
        <li><LinkPro /></li>
      </ul>
    </Menu>
  )
}
