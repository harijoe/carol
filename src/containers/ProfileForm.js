import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { ProfileForm } from 'components'
import { userDetails, userUpdate } from 'store/actions'
import { fromUser, fromContext } from 'store/selectors'
import { createValidator, required } from 'services/validation'
import transformDate from 'utils/transformDate'

class ProfileFormContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentDidMount() {
    this.props.request()
  }

  render() {
    return (
      <ProfileForm {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  const details = fromUser.getDetails(state)

  return {
    details: {
      email: details.email,
      facebookId: details.facebookId,
      googleId: details.googleId,
    },
    initialValues: {
      ...details,
      imageBase64: details.imageUrl,
      birthday: transformDate(details.birthday),
      country: fromContext.getCountry(state),
    },
  }
}

const onSubmit = (values, dispatch, formInfo) => {
  const splitDate = values.birthday.split('/')
  const data = JSON.parse(JSON.stringify(values))

  data.birthday = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`

  if (formInfo.initialValues.imageBase64 === data.imageBase64) {
    delete data.imageBase64
  }

  return dispatch(userUpdate.request(data, values['@id']))
}

const validate = createValidator({
  lastName: [required],
  firstName: [required],
  mobilePhone: [required],
  postalCode: [required],
  countryCode: [required],
  region: [required],
  city: [required],
  gender: [required],
  birthday: [required],
})

export const config = {
  form: 'ProfileForm',
  enableReinitialize: true,
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(userDetails.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(ProfileFormContainer))
