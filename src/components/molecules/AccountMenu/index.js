import React from 'react'
import { FormattedMessage } from 'react-intl'

import { List, Button, Link } from 'components'

const AccountMenu = ({ logout }) => (
  <List>
    <li><Link to="/projects"><FormattedMessage id="user.my_projects" /></Link></li>
    <li><Link to="/profile"><FormattedMessage id="user.my_account" /></Link></li>
    <li><Link to="/message"><FormattedMessage id="user.messaging" /></Link></li>
    <li><Button onClick={logout}><FormattedMessage id="user.log_out" /></Button></li>
  </List>
)

AccountMenu.propTypes = {
  logout: React.PropTypes.func.isRequired,
}

export default AccountMenu
