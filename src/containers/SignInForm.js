import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { authLogin } from 'store/actions'
import { createValidator, required, email } from 'services/validation'
import { fromStatus, fromRouting } from 'store/selectors'

import { SignInForm } from 'components'

const SignInFormContainer = props => (
  <SignInForm {...props} />
)

const onSubmit = (values, dispatch) => dispatch(authLogin('password', 'SignInForm').request(`&username=${encodeURIComponent(values.email)}&password=${encodeURIComponent(values.password)}`))

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

const mapStateToProps = state => ({
  loading: fromStatus.getLoading(state).AUTH_LOGIN,
  redirectPathname: fromRouting.getState(state).redirectPathname || '/',
})

const mapDispatchToProps = (dispatch, { redirectPathname }) => (
  bindActionCreators({
    redirectTo: path => push({ pathname: path, state: { redirectPathname } }),
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(SignInFormContainer))
