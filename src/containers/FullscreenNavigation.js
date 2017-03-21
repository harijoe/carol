import React from 'react'
import { connect } from 'react-redux'

import { FullscreenNavigation } from 'components'
import { fromContext } from 'store/selectors'
import { toggleFullscreenNavigation } from 'store/actions'


const FullscreenNavigationContainer = ({ show }) => (
  <FullscreenNavigation show={show} />
)

FullscreenNavigationContainer.propTypes = {
  show: React.PropTypes.bool,
}

const mapStateToProps = state => ({
  show: fromContext.getFullscreenNavigation(state),
})
const mapDispatchToProps = dispatch => ({
  toggleFullscreenNavigation: () => dispatch(toggleFullscreenNavigation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FullscreenNavigationContainer)
