import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { validatePhoneCode, validatePhoneAgain } from 'store/actions'
import { fromUser, fromStatus } from 'store/selectors'

import PhoneCodeForm from 'components/PhoneCodeForm'

const PhoneCodeFormContainer = props => <PhoneCodeForm {...props} />

const mapStateToProps = state => ({
  disabled: fromUser.getId(state) == null,
  loading: fromStatus.getLoading(state).USER_VALIDATE_PHONE_CODE,
})

const onSubmit = (values, dispatch) => {
  dispatch(validatePhoneCode.request(values))
}

const resendSMS = dispatch => {
  dispatch(validatePhoneAgain())
}

export const config = {
  form: 'PhoneCodeForm',
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit,
}

const mapDispatchToProps = dispatch => ({
  resendSMS: () => resendSMS(dispatch),
})

PhoneCodeFormContainer.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  resendSMS: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(PhoneCodeFormContainer))
