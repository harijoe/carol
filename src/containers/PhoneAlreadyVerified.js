import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromUser, fromRouting } from 'store/selectors'
import { checkValidationFlow } from 'store/actions'

import { PhoneAlreadyVerified } from 'components'

class PhoneAlreadyVerifiedContainer extends Component {
  static propTypes = {
    children: PropTypes.any,
    verified: PropTypes.bool,
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { verified, children } = this.props

    return <PhoneAlreadyVerified {...{ verified, children }} />
  }
}

const mapStateToProps = state => ({
  verified: fromUser.getMobilePhoneVerified(state),
  query: fromRouting.getQuery(state),
})

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(checkValidationFlow()),
})


export default connect(mapStateToProps, mapDispatchToProps)(PhoneAlreadyVerifiedContainer)
