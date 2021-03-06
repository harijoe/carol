import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'
import { toggleMainNavigation } from 'store/actions'

import MainNavigation from 'components/MainNavigation'

const MainNavigationContainer = ({ show }) => <MainNavigation show={show} />

MainNavigationContainer.propTypes = {
  show: PropTypes.bool,
}

const mapStateToProps = state => ({
  show: fromContext.getMainNavigation(state),
})
const mapDispatchToProps = dispatch => ({
  toggleMainNavigation: () => dispatch(toggleMainNavigation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigationContainer)
