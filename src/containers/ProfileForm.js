import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import pick from 'lodash/pick'
import { userDetails, userUpdate } from 'store/actions'
import { fromUser, fromContext } from 'store/selectors'
import transformDate from 'utils/transformDate'

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
        '@id', 'civility', 'firstName', 'lastName',
        'preferedLanguage', 'mobilePhone', 'mobilePhone',
        'fixedPhone', 'address', 'postalCode', 'countryCode',
        'region', 'city', 'newsletterSubscription',
      ]),
      imageBase64: details.imageUrl,
      birthday: transformDate(details.birthday),
      country: fromContext.getCountry(state),
    },
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

export const config = {
  form: 'ProfileForm',
  enableReinitialize: true,
  destroyOnUnmount: false,
  onSubmit,
}

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(userDetails.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(ProfileFormContainer))
