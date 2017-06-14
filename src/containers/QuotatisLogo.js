import React from 'react'
import { connect } from 'react-redux'
import { fromRouting } from 'store/selectors'

import { QuotatisLogo } from 'components'

const QuotatisLogoContainer = props => (
  <QuotatisLogo {...props} />
)

const mapStateToProps = state => ({
  homepage: fromRouting.isHomepage(state),
})

export default connect(mapStateToProps)(QuotatisLogoContainer)
