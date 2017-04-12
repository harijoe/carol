import React from 'react'
import { connect } from 'react-redux'

import { PopinNavigation } from 'components'
import { fromContext } from 'store/selectors'
import { togglePopinNavigation } from 'store/actions'


const PopinNavigationContainer = ({ show }) => (
  <PopinNavigation show={show} />
)

PopinNavigationContainer.propTypes = {
  show: React.PropTypes.bool,
}

const mapStateToProps = state => ({
  show: fromContext.getPopinNavigation(state),
})
const mapDispatchToProps = dispatch => ({
  togglePopinNavigation: () => dispatch(togglePopinNavigation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PopinNavigationContainer)
