import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { createValidator, required, email, captcha } from 'services/validation'
import { fromForm, fromStatus } from 'store/selectors'
import { userCreate } from 'store/actions'
import { SignUpForm } from 'components'

const SignUpFormContainer = props => (
  <SignUpForm {...props} />
)

const onSubmit = (data, dispatch) => dispatch(userCreate.request(data))

const validate = createValidator({
  email: [required, email],
  password: [required],
  captcha: [captcha],
})

const config = {
  form: 'SignUpForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

const mapStateToProps = state => ({
  initialValues: {
    _csrf: fromForm.getCsrfToken(state),
    captcha: null,
  },
  loading: fromStatus.getLoading(state).USER_CREATE || fromStatus.getLoading(state).AUTH_LOGIN,
})

export default connect(mapStateToProps)(reduxForm(config)(SignUpFormContainer))
