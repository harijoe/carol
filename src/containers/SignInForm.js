import React from 'react'
import { reduxForm } from 'redux-form'

import { authLogin } from 'store/actions'
import { createValidator, required, email } from 'services/validation'
import { SignInForm } from 'components'

const SignInFormContainer = props => (
  <SignInForm {...props} />
)

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

export default reduxForm(config)(SignInFormContainer)
