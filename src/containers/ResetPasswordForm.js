import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createValidator, required, match, password } from 'services/validation'
import { resetPassword } from 'store/actions'
import { fromStatus } from 'store/selectors'

import { ResetPasswordForm } from 'components'

const ResetPasswordFormContainer = props => (
  <ResetPasswordForm {...props} />
)

const onSubmit = (data, dispatch) => dispatch(resetPassword.request(data, data.token))

const validate = createValidator({
  password: [password],
  passwordValidation: [required, match('password')],
})

const mapStateToProps = state => ({
  loading: fromStatus.getLoading(state).USER_UPDATE_PASSWORD,
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

export default connect(mapStateToProps)(reduxForm(config)(ResetPasswordFormContainer))
