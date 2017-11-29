import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { validateEmail } from 'store/actions'

import EmailValidationPage from 'pages/EmailValidationPage'

class EmailValidationPageContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request({ origin: 'validation-page' })
  }

  render() {
    return <EmailValidationPage {...this.props} />
  }
}

const mapDispatchToProps = dispatch => ({
  request: data => dispatch(validateEmail.request(data)),
})

export default connect(null, mapDispatchToProps)(EmailValidationPageContainer)
