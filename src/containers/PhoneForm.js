import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { validatePhone } from 'store/actions'
import { fromUser, fromStatus, fromContext } from 'store/selectors'
import { createValidator, required } from 'services/validation'

import { PhoneForm } from 'components'

const PhoneFormContainer = props => (
  <PhoneForm {...props} />
)

const mapStateToProps = (state) => {
  const details = fromUser.getDetails(state)

  return {
    initialValues: {
      mobilePhone: details.mobilePhone,
    },
    disabled: details['@id'] == null,
    loading: fromStatus.getLoading(state).USER_VALIDATE_PHONE,
    language: fromContext.getLang(state),
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

PhoneFormContainer.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  initialValues: PropTypes.shape({
    mobilePhone: PropTypes.string,
  }),
}

export default connect(mapStateToProps)(reduxForm(config)(PhoneFormContainer))
