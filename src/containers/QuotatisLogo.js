import React from 'react'
import { connect } from 'react-redux'
import { fromRouting } from 'store/selectors'

import QuotatisLogo from 'components/QuotatisLogo'

const QuotatisLogoContainer = props => <QuotatisLogo {...props} />

const mapStateToProps = state => ({
  isHomepage: fromRouting.isHomepage(state),
})

export default connect(mapStateToProps)(QuotatisLogoContainer)
