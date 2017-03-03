import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'

import { locales } from 'config'
import { List } from 'components'

const BurgerMenu = ({ locale }) => (
  <List>
    <li>
      <Link to="/">
        <FormattedMessage id="home" />
      </Link>
    </li>
    <li>
      <Link to="/project-elaboration">
        <FormattedMessage id="firm.find_pro" />
      </Link>
    </li>
    <li>
      <a href={locales[locale].contentUrl}>
        <FormattedMessage id="firm.resource" />
      </a>
    </li>
    <li>
      <Link to="/help">
        <FormattedMessage id="help" />
      </Link>
    </li>
    <li>
      <a href={locales[locale].proUrl}>
        <FormattedMessage id="firm.i_am_pro" />
      </a>
    </li>
  </List>
)

BurgerMenu.propTypes = {
  locale: React.PropTypes.string,
}

export default BurgerMenu
