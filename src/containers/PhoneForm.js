import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { userDetails, validatePhone } from 'store/actions'
import { fromUser, fromStatus } from 'store/selectors'
import { createValidator, required } from 'services/validation'

import { PhoneForm } from 'components'

class PhoneFormContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentDidMount() {
    this.props.request()
  }

  render() {
    return (
      <PhoneForm {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  const details = fromUser.getDetails(state)

  return {
    initialValues: {
      mobilePhone: details.mobilePhone,
    },
    verified: details.mobilePhoneVerified,
    disabled: details['@id'] == null,
    loading: fromStatus.getLoading(state).USER_VALIDATE_PHONE,
  }
}

const onSubmit = (values, dispatch) => {
  dispatch(validatePhone.request(values))
}

const validate = createValidator({
  mobilePhone: [required],
})

export const config = {
  form: 'PhoneForm',
  enableReinitialize: true,
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(userDetails.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(PhoneFormContainer))
