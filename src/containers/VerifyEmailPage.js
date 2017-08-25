import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { verifyEmail } from 'store/actions'

import styled from 'styled-components'

import { Loading } from 'components'

const LoadingWrapper = styled.div`
  position: fixed;
  z-index: 19;
  left: 50%;
  top: 50%;
  margin-left: -30px;
  margin-top: -30px;
`

class VerifyEmailPageContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return (
      <LoadingWrapper>
        <Loading loading />
      </LoadingWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(verifyEmail.request()),
})

export default connect(null, mapDispatchToProps)(VerifyEmailPageContainer)
