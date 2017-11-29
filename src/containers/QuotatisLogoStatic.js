import React from 'react'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'

import QuotatisLogoStatic from 'components/QuotatisLogoStatic'

const QuotatisLogoStaticContainer = props => <QuotatisLogoStatic {...props} />

const mapStateToProps = state => ({
  country: fromContext.getCountry(state),
})

export default connect(mapStateToProps)(QuotatisLogoStaticContainer)
