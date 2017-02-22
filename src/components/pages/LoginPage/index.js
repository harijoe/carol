import React, { PropTypes } from 'react'

import { MainLayout } from 'components'
import { SignInForm } from 'containers'

const LoginPage = (props) => {
  const username = props.location != null ? props.location.query.username : null

  return (
    <MainLayout {...props}>
      <SignInForm {...props} initialValues={{ email: username }} form="SignInFormLoginPage" />
    </MainLayout>
  )
}

LoginPage.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({
      username: PropTypes.string,
    }),
  }),
}

export default LoginPage
