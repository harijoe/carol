import React from 'react'
import { connect } from 'react-redux'

import { BurgerButton } from 'components'
import { fromContext } from 'store/selectors'
import { togglePopinNavigation, closeAllPopin } from 'store/actions'

const BurgerButtonContainer = props => (
  <BurgerButton {...props} />
)

const mapStateToProps = state => ({
  isPopin: fromContext.isPopin(state),
})

const mapDispatchToProps = dispatch => ({
  togglePopinNavigation: () => dispatch(togglePopinNavigation()),
  closeAllPopin: () => dispatch(closeAllPopin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BurgerButtonContainer)
