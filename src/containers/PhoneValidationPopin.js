import React from 'react'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'
import { setPhoneValidationPopinMode } from 'store/actions'

import { PhoneValidationPopin } from 'components'

const PhoneValidationPopinContainer = props => <PhoneValidationPopin {...props} />

const mapStateToProps = state => ({
  show: fromContext.getPhoneValidationPopin(state),
  mode: fromContext.getPhoneValidationPopinMode(state),
})

const mapDispatchToProps = dispatch => ({
  setMode: mode => dispatch(setPhoneValidationPopinMode(mode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneValidationPopinContainer)
