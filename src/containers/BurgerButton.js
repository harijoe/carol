import React from 'react'
import { connect } from 'react-redux'

import { BurgerButton } from 'components'
import { fromContext } from 'store/selectors'
import { toggleMainNavigation, closeAll } from 'store/actions'

const BurgerButtonContainer = props => <BurgerButton {...props} />

const mapStateToProps = state => ({
  isPopin: fromContext.isPopin(state),
})

const mapDispatchToProps = dispatch => ({
  toggleMainNavigation: () => dispatch(toggleMainNavigation()),
  closeAll: () => dispatch(closeAll()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BurgerButtonContainer)
