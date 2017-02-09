import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'

import { createValidator, required, match } from 'services/validation'
import { resetPassword } from 'store/actions'
import { ResetPasswordForm } from 'components'

const ResetPasswordFormContainer = props => (
  <ResetPasswordForm {...props} />
)

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => dispatch(resetPassword.request(data, data.token, resolve, reject))).catch((e) => {
  throw new SubmissionError(e)
})

const validate = createValidator({
  password: [required],
  passwordValidation: [required, match('password')],
})

const mapStateToProps = state => ({
  initialValues: {
    token: typeof state.routing !== 'undefined' ? state.routing.locationBeforeTransitions.query.token : '',
  },
})

export const config = {
  form: 'ForgotPasswordForm',
  fields: ['password', 'passwordValidation'],
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(ResetPasswordFormContainer))
