import React from 'react'
import { connect } from 'react-redux'

import { BurgerButton } from 'components'
import { fromContext } from 'store/selectors'
import { toggleFullscreenNavigation } from 'store/actions'

const BurgerButtonContainer = props => (
  <BurgerButton {...props} />
)

const mapStateToProps = state => ({
  fullscreenNavigation: fromContext.getFullscreenNavigation(state),
})

const mapDispatchToProps = dispatch => ({
  toggleFullscreenNavigation: () => dispatch(toggleFullscreenNavigation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BurgerButtonContainer)
