import React from 'react'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'

import { QuotatisLogo } from 'components'

const QuotatisLogoContainer = props => (
  <QuotatisLogo {...props} />
)

const mapStateToProps = state => ({
  popinNavigation: fromContext.getPopinNavigation(state),
  popinAccount: fromContext.getPopinAccount(state),
})

export default connect(mapStateToProps)(QuotatisLogoContainer)
