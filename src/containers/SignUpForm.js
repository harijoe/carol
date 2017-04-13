import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { createValidator, required, email, match, captcha } from 'services/validation'
import { fromForm } from 'store/selectors'
import { userCreate } from 'store/actions'
import { SignUpForm } from 'components'

const SignUpFormContainer = props => (
  <SignUpForm {...props} />
)

const onSubmit = (data, dispatch) => dispatch(userCreate.request(data))

const validate = createValidator({
  email: [required, email],
  password: [required],
  confirmPassword: [required, match('password')],
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
})

export default connect(mapStateToProps)(reduxForm(config)(SignUpFormContainer))
