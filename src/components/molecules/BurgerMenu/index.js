import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'

import { List } from 'components'

const BurgerMenu = ({ proHomeLink }) => {
  return (
    <List>
      <li>
        <Link to="/">
          <FormattedMessage id="home" />
        </Link>
      </li>
      <li>
        <Link to="/simple-project-elaboration">
          <FormattedMessage id="firm.find_pro" />
        </Link>
      </li>
      <li>
        <Link to="*">
          <FormattedMessage id="firm.resource" />
        </Link>
      </li>
      <li>
        <Link to="/help">
          <FormattedMessage id="help" />
        </Link>
      </li>
      <li>
        <a href={proHomeLink}>
          <FormattedMessage id="firm.i_am_pro" />
        </a>
      </li>
    </List>
  )
}

BurgerMenu.propTypes = {
  proHomeLink: React.PropTypes.string,
}

export default BurgerMenu
