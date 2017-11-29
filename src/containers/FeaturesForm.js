import React from 'react'
import { connect } from 'react-redux'

import { fromContext } from 'store/selectors'
import { enableFeature } from 'store/actions'
import FeaturesForm from 'components/FeaturesForm'

const FeaturesContainer = props =>
  !props.ssr && <FeaturesForm {...props} />

const mapStateToProps = state => ({
  ssr: fromContext.isSSR(state),
  features: fromContext.getFeatures(state),
})

const mapDispatchToProps = dispatch => ({
  enableFeature: (feature, enabled) => dispatch(enableFeature(feature, enabled)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesContainer)
