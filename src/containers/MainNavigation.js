import React from 'react'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'
import { toggleMainNavigation } from 'store/actions'

import { MainNavigation } from 'components'

const MainNavigationContainer = ({ show }) => (
  <MainNavigation show={show} />
)

MainNavigationContainer.propTypes = {
  show: React.PropTypes.bool,
}

const mapStateToProps = state => ({
  show: fromContext.getMainNavigation(state),
})
const mapDispatchToProps = dispatch => ({
  toggleMainNavigation: () => dispatch(toggleMainNavigation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigationContainer)
