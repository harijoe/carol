import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { validateEmail } from 'store/actions'
import { fromUser } from 'store/selectors'
import { createValidator, required } from 'services/validation'

import { EmailForm } from 'components'

const EmailFormContainer = props => <EmailForm {...props} />

const mapStateToProps = state => {
  const details = fromUser.getDetails(state)

  return {
    initialValues: {
      email: details.email,
    },
    disabled: details['@id'] == null,
  }
}

const onSubmit = (values, dispatch, origin) => dispatch(validateEmail.request({ origin: `${origin}-form` }))

const validate = createValidator({
  email: [required],
})

export const config = {
  form: 'EmailForm',
  enableReinitialize: true,
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(EmailFormContainer))
