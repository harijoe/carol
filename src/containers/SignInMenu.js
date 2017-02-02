import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import SignInMenu from 'components/organisms/Header/molecules/PrimaryNavigation/atoms/SignInMenu'
import { authLogin } from 'store/actions'
import { createValidator, required, email } from 'services/validation'
import { fromAuth } from 'store/selectors'

const SignInMenuContainer = props => {
  return (
    <SignInMenu {...props} />
  )
}

const mapStateToProps = state => ({
  isAuthenticated: fromAuth.isLogged(state),
  user: state.user,
})

SignInMenuContainer.propTypes = {
  getTokenPassword: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  location: PropTypes.object,
  redirectPathname: PropTypes.string,
}

const onSubmit = (values, dispatch) => {
  dispatch(authLogin('password').request(`&username=${values.email}&password=${values.password}`))
}

const validate = createValidator({
  email: [required, email],
  password: [required],
})

export const config = {
  form: 'SignInForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(SignInMenuContainer))
