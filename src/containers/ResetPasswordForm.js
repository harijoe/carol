import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { injectIntl } from 'react-intl'
import { addNotification as notify } from 'reapop'

import messages from 'utils/messages'
import { createValidator, required, match } from 'services/validation'
import { resetPassword } from 'store/actions'
import { ResetPasswordForm } from 'components'

const ResetPasswordFormContainer = props => (
  <ResetPasswordForm {...props} />
)

const onSubmit = (data, dispatch, { intl }) => new Promise((resolve, reject) => {
  dispatch(resetPassword.request(data, data.token, resolve, reject))
  dispatch(notify({
    title: intl.formatMessage(messages('user.thank_you').label),
    message: intl.formatMessage(messages('user.reset_password_success').label),
    status: 'success',
  }))
}).catch((e) => {
  dispatch(notify({
    title: intl.formatMessage(messages('server_error').label),
    message: intl.formatMessage(messages('server_error').label),
    status: 'error',
  }))
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

export default connect(mapStateToProps)(injectIntl(reduxForm(config)(ResetPasswordFormContainer)))
