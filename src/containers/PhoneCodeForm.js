import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { userDetails, validatePhoneCode, validatePhoneAgain, checkPhoneOnCode } from 'store/actions'
import { fromUser, fromStatus } from 'store/selectors'

import { PhoneCodeForm } from 'components'

class PhoneCodeFormContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
    checkPhone: PropTypes.func,
  }

  componentDidMount() {
    this.props.checkPhone()
    this.props.request()
  }

  render() {
    return (
      <PhoneCodeForm {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  disabled: fromUser.getId(state) == null,
  loading: fromStatus.getLoading(state).USER_VALIDATE_PHONE_CODE,
})

const onSubmit = (values, dispatch) => {
  dispatch(validatePhoneCode.request(values))
}

const resendSMS = (dispatch) => {
  dispatch(validatePhoneAgain())
}

export const config = {
  form: 'PhoneCodeForm',
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit,
}

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(userDetails.request()),
  checkPhone: () => dispatch(checkPhoneOnCode()),
  resendSMS: () => resendSMS(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(PhoneCodeFormContainer))
