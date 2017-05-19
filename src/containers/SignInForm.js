import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { authLogin } from 'store/actions'
import { createValidator, required, email } from 'services/validation'
import { fromStatus } from 'store/selectors'

import { SignInForm } from 'components'

const SignInFormContainer = props => (
  <SignInForm {...props} />
)

const onSubmit = (values, dispatch) => dispatch(authLogin('password', 'SignInForm').request(`&username=${values.email}&password=${values.password}`))

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
})

export default connect(mapStateToProps)(reduxForm(config)(SignInFormContainer))
