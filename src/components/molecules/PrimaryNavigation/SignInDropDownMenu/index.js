import React, { PropTypes } from 'react'

import { DropDownMenu, SignInForm } from 'containers'

const SignInDropDownMenu = ({ location, ...props }) => {
  if (location && location.pathname && (location.pathname === '/login')) {
    return null
  }

  return (
    <DropDownMenu label="login">
      <SignInForm {...props} />
    </DropDownMenu>
  )
}

SignInDropDownMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}

export default SignInDropDownMenu