import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { verifyEmail } from 'store/actions'

import LoadingPage from 'pages/LoadingPage'

class VerifyEmailPageContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return (
      <div>
        <LoadingPage />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(verifyEmail.request()),
})

export default connect(null, mapDispatchToProps)(VerifyEmailPageContainer)
