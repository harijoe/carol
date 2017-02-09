import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'

import { createValidator, required, email } from 'services/validation'
import { fromForm } from 'store/selectors'
import { forgotPassword } from 'store/actions'
import { ForgotPasswordForm } from 'components'
import getFormErrors from 'utils/formErrors'

const ForgotPasswordFormContainer = props => (
  <ForgotPasswordForm {...props} />
)

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(forgotPassword.request(data, resolve, reject))
}).catch((e) => {
  throw new SubmissionError(getFormErrors(e))
})

const validate = createValidator({
  email: [required, email],
})

const mapStateToProps = state => ({
  initialValues: { _csrf: fromForm.getCsrfToken(state) },
})

export const config = {
  form: 'ForgotPasswordForm',
  fields: ['email'],
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(ForgotPasswordFormContainer))
