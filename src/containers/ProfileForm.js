import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import { userDetails, userUpdate } from 'store/actions'
import { fromUser, fromContext, fromStatus } from 'store/selectors'
import transformDate from 'utils/transformDate'
import { createValidator, required, exactLength, maxLength } from 'services/validation'

import { ProfileForm } from 'components'

class ProfileFormContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return <ProfileForm {...this.props} />
  }
}

const mapStateToProps = state => {
  const details = fromUser.getDetails(state)
  const [birthdateDay, birthdateMonth, birthdateYear] = details.birthdate ? transformDate(details.birthdate).split('/') : []

  return {
    language: fromContext.getLang(state),
    details: {
      email: details.email,
      facebookId: details.facebookId,
      googleId: details.googleId,
    },
    initialValues: {
      ...pick(details, [
        '@id',
        'gender',
        'firstName',
        'lastName',
        'email',
        'preferedLanguage',
        'mobilePhone',
        'fixedPhone',
        'region',
        'newsletterSubscription',
        'contactPreference',
        'contactComment',
        'emailVerified',
        'mobilePhoneVerified',
      ]),
      imageBase64: details.imageUrl,
      birthdateDay,
      birthdateMonth,
      birthdateYear,
      country: fromContext.getCountry(state),
    },
    loading: fromStatus.getLoading(state).USER_DETAILS,
    updating: fromStatus.getLoading(state).USER_UPDATE,
  }
}

const onSubmit = (values, dispatch, formInfo) => {
  const data = JSON.parse(JSON.stringify(omit(values, ['birthdateDay', 'birthdateMonth', 'birthdateYear'])))

  const { birthdateDay, birthdateMonth, birthdateYear } = values

  if (birthdateDay && birthdateMonth && birthdateYear) {
    data.birthdate = `${birthdateYear}-${birthdateMonth}-${birthdateDay}`
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
  birthdateDay: [required, maxLength(2)],
  birthdateMonth: [required],
  birthdateYear: [required, exactLength(4)],
  contactPreference: [required],
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
