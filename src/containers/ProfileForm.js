import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import pick from 'lodash/pick'
import { userDetails, userUpdate } from 'store/actions'
import { fromUser, fromContext, fromStatus } from 'store/selectors'
import transformDate from 'utils/transformDate'
import { createValidator, required, postalCode } from 'services/validation'

import { ProfileForm } from 'components'

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
      ...pick(details, [
        '@id', 'gender', 'firstName', 'lastName',
        'email', 'preferedLanguage', 'mobilePhone', 'mobilePhone',
        'fixedPhone', 'address', 'postalCode',
        'region', 'city', 'newsletterSubscription', 'contactPreference',
        'contactComment', 'emailVerified', 'mobilePhoneVerified', 'postalCode',
      ]),
      imageBase64: details.imageUrl,
      birthday: transformDate(details.birthday),
      country: fromContext.getCountry(state),
    },
    loading: fromStatus.getLoading(state).USER_UPDATE,
  }
}

const onSubmit = (values, dispatch, formInfo) => {
  const data = JSON.parse(JSON.stringify(values))

  if (values.birthday != null) {
    const splitDate = values.birthday.split('/')

    data.birthday = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
  }

  if (formInfo.initialValues.imageBase64 === data.imageBase64) {
    delete data.imageBase64
  }

  return dispatch(userUpdate.request(data, values['@id']))
}

const validate = createValidator({
  lastName: [required],
  firstName: [required],
  gender: [required],
  contactPreference: [required],
  postalCode: [postalCode],
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
