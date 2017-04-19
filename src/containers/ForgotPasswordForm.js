import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { createValidator, required, email } from 'services/validation'
import { fromForm } from 'store/selectors'
import { forgotPassword } from 'store/actions'
import { ForgotPasswordForm } from 'components'

const ForgotPasswordFormContainer = props => (
  <ForgotPasswordForm {...props} />
)

const onSubmit = (data, dispatch) => dispatch(forgotPassword.request(data))

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
