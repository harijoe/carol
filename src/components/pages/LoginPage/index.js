import React from 'react'
import PropTypes from 'prop-types'

import { MainLayout, MainWrapper } from 'components'
import { SignInForm } from 'containers'

const LoginPage = (props) => {
  const email = props.location != null ? props.location.query.email : null

  return (
    <MainLayout {...props}>
      <MainWrapper>
        <SignInForm {...props} initialValues={{ email }} carousel />
      </MainWrapper>
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
