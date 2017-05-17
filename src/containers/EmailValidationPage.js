import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { validateEmail } from 'store/actions'

import { EmailValidationPage } from 'components'

class EmailValidationPageContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return <EmailValidationPage {...this.props} />
  }
}

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(validateEmail.request()),
})


export default connect(null, mapDispatchToProps)(EmailValidationPageContainer)
