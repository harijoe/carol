import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createValidator, required, email } from 'services/validation'
import { fromStatus } from 'store/selectors'
import { forgotPassword } from 'store/actions'

import ForgotPasswordForm from 'components/ForgotPasswordForm'

const ForgotPasswordFormContainer = props => <ForgotPasswordForm {...props} />

const onSubmit = (data, dispatch) => dispatch(forgotPassword.request(data))

const validate = createValidator({
  email: [required, email],
})

const mapStateToProps = state => ({
  loading: fromStatus.getLoading(state).USER_FORGOT_PASSWORD,
})

export const config = {
  form: 'ForgotPasswordForm',
  fields: ['email'],
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(ForgotPasswordFormContainer))
