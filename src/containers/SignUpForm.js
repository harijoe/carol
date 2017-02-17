import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { reduxForm, SubmissionError } from 'redux-form'
import { injectIntl } from 'react-intl'
import { addNotification as notify } from 'reapop'

import messages from 'utils/messages'
import getFormErrors from 'utils/formErrors'
import { createValidator, required, email, match, captcha } from 'services/validation'
import { fromForm } from 'store/selectors'
import { userCreate, setToken } from 'store/actions'
import { SignUpForm } from 'components'

const SignUpFormContainer = props => (
  <SignUpForm {...props} />
)

const onSubmit = (data, dispatch, { intl }) => setToken(dispatch).then(() => { // @TODO: Test on error
  new Promise((resolve, reject) => {
    dispatch(userCreate.request(data, resolve, reject))
  }).then(() => {
    dispatch(notify({
      title: intl.formatMessage(messages('user.thank_you').label),
      message: intl.formatMessage(messages('user.sign_up.confirmation').label),
      status: 'success',
    }))
    dispatch(push('/'))
  }).catch((e) => {
    throw new SubmissionError(getFormErrors(e))
  })
})

const validate = createValidator({
  email: [required, email],
  password: [required],
  confirmPassword: [required, match('password')],
  captcha: [captcha],
})

const config = {
  form: 'SignUpForm',
  fields: ['email', 'password', 'confirmPassword', 'newsletter', 'captcha'],
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

export default connect(mapStateToProps)(injectIntl(reduxForm(config)(SignUpFormContainer)))
