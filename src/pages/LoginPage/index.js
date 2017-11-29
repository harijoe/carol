import React from 'react'
import PropTypes from 'prop-types'

import MainLayout from 'layouts/MainLayout'
import SignInForm from 'containers/SignInForm'

const LoginPage = props => {
  const email = props.location != null ? props.location.query.email : null

  return (
    <MainLayout {...props}>
      <SignInForm {...props} initialValues={{ email }} carousel />
    </MainLayout>
  )
}

LoginPage.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({
      email: PropTypes.string,
    }),
  }),
}

export default LoginPage
