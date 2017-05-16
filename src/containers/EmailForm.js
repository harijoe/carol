import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { userDetails, validateEmail } from 'store/actions'
import { fromUser } from 'store/selectors'
import { createValidator, required } from 'services/validation'

import { EmailForm } from 'components'

class EmailFormContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return (
      <EmailForm {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  const details = fromUser.getDetails(state)

  return {
    initialValues: {
      email: details.email,
    },
    disabled: details['@id'] == null,
  }
}

const onSubmit = (values, dispatch) => {
  dispatch(validateEmail.request(values))
}

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

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(userDetails.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(EmailFormContainer))
