import React from 'react'
import { Field } from 'redux-form'
import { FormattedMessage } from 'react-intl'

import { RenderField, Button } from 'components'
import { DropDownMenu, AccountMenu } from 'containers'
import { isAuthenticated } from 'utils/auth'

const SignInMenu = ({ location, isAuthenticated, handleSubmit, submitting }) => {
  if (location && location.pathname && (location.pathname === '/login')) {
    return null
  }

  if (!isAuthenticated) {
    return (
      <DropDownMenu label="login">
        <form onSubmit={handleSubmit}>
          <Field name="email" type="text" component={RenderField} label="Email" />
          <Field name="password" type="password" component={RenderField} label="Password" />
          <Button type="submit" disabled={submitting}><FormattedMessage id="user.sign_in" tagName="span" /></Button>
        </form>
      </DropDownMenu>
    )
  }

  return (
    <DropDownMenu label="user.my_account">
      <AccountMenu />
    </DropDownMenu>
  )
}

SignInMenu.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool,
  isAuthenticated: React.PropTypes.bool,
  location: React.PropTypes.object,
}

export default SignInMenu
