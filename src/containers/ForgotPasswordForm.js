import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { injectIntl } from 'react-intl'
import { addNotification as notify } from 'reapop'

import messages from 'utils/messages'
import { createValidator, required, email } from 'services/validation'
import { fromForm } from 'store/selectors'
import { forgotPassword } from 'store/actions'
import { ForgotPasswordForm } from 'components'

const ForgotPasswordFormContainer = props => (
  <ForgotPasswordForm {...props} />
)

const onSubmit = (data, dispatch, { intl }) => new Promise((resolve, reject) => {
  dispatch(forgotPassword.request(data, resolve, reject))
}).then(() => {
  dispatch(notify({
    title: intl.formatMessage(messages('user.thank_you').label),
    message: intl.formatMessage(messages('user.reset_password_email').label),
    status: 'success',
  }))
}).catch((e) => {
  throw new SubmissionError({ _error: e })
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

export default connect(mapStateToProps)(injectIntl(reduxForm(config)(ForgotPasswordFormContainer)))
