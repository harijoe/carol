import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'

import { createValidator, email, password, required } from 'services/validation'
import { fromStatus, fromRouting } from 'store/selectors'
import { userCreate } from 'store/actions'
import { SignUpForm } from 'components'

const SignUpFormContainer = props => <SignUpForm {...props} />

const onSubmit = (data, dispatch) => dispatch(userCreate.request(data))

const validate = createValidator({
  gender: required,
  firstName: required,
  lastName: required,
  email: [email, required],
  password: [password, required],
})

const config = {
  form: 'SignUpForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

const mapStateToProps = state => ({
  loading: fromStatus.getLoading(state).USER_CREATE || fromStatus.getLoading(state).AUTH_LOGIN,
  redirectPathname: fromRouting.getState(state).redirectPathname || '/',
})

const mapDispatchToProps = dispatch => ({
  redirectTo: redirectPathname => path => dispatch(push({ pathname: path, state: { redirectPathname } })),
})

const mergeProps = ({ loading, redirectPathname }, { redirectTo }, ownProps) => ({
  loading,
  redirectTo: redirectTo(redirectPathname),
  redirectPathname,
  ...ownProps,
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxForm(config)(SignUpFormContainer))
