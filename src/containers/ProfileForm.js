import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'

import { ProfileForm } from 'components'
import { profile, profileUpdate, setToken } from 'store/actions'
import { fromUser } from 'store/selectors'
import { createValidator, required } from 'services/validation'
import getFormErrors from 'utils/formErrors'

const update = profileUpdate.request

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
    initialValues: {
      ...details,
      imageBase64: details.imageUrl,
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

  return new Promise((resolve, reject) => {
    setToken(dispatch).then(() => {
      dispatch(update(data, values['@id'], resolve, reject))
    })
  }).catch((e) => {
    throw new SubmissionError(getFormErrors(e))
  })
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
  request: () => {
    setToken(dispatch).then(() => {
      dispatch(profile.request())
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(ProfileFormContainer))
