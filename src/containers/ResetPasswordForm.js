import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { injectIntl } from 'react-intl'

import { createValidator, required, match } from 'services/validation'
import { resetPassword } from 'store/actions'
import { ResetPasswordForm } from 'components'

const ResetPasswordFormContainer = props => (
  <ResetPasswordForm {...props} />
)

const onSubmit = (data, dispatch) => dispatch(resetPassword.request(data, data.token))

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
  form: 'ResetPasswordForm',
  fields: ['password', 'passwordValidation'],
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(injectIntl(reduxForm(config)(ResetPasswordFormContainer)))
