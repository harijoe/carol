import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromRouting } from 'store/selectors'

import Header from 'components/Header'

const HeaderContainer = props =>
  <Header {...props}>
    {props.children}
  </Header>

HeaderContainer.propTypes = {
  children: PropTypes.any,
}

const mapStateToProps = state => ({
  isLandingPage: fromRouting.isLandingPage(state),
})

export default connect(mapStateToProps)(HeaderContainer)
