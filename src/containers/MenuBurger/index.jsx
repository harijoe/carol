import React from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'
import LinkPro from '../../containers/pro/LinkPro'
import Menu from '../Menu'

export default function MenuBurger () {
  return (
    <Menu label="burger_menu">
      <ul>
        <li>
          <Link to="/">
            <FormattedMessage id="home" />
          </Link>
        </li>
        <li>
          <Link to="/search-pro">
            <FormattedMessage id="pro.find_pro" />
          </Link>
        </li>
        <li>
          <Link to="*">
            <FormattedMessage id="pro.resource" />
          </Link>
        </li>
        <li>
          <Link to="/help">
            <FormattedMessage id="help" />
          </Link>
        </li>
        <li><LinkPro /></li>
      </ul>
    </Menu>
  )
}
