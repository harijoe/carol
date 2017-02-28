import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'

import { setToken } from 'store/actions'
import { createValidator, required, email } from 'services/validation'
import { SignInForm } from 'components'

const SignInFormContainer = props => (
  <SignInForm {...props} />
)

const onSubmit = (values, dispatch) => (
  setToken(dispatch, 'password', `&username=${values.email}&password=${values.password}`).catch((e) => {
    throw new SubmissionError({ _error: e })
  })
)

const validate = createValidator({
  email: [required, email],
  password: [required],
})

export const config = {
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default reduxForm(config)(SignInFormContainer)
