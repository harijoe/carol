import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromContext, fromRouting } from 'store/selectors'

import { Footer } from 'components'

const FooterContainer = props => <Footer {...props} />

FooterContainer.propTypes = {
  locale: PropTypes.string,
}

const mapStateToProps = state => ({
  locale: fromContext.getLocale(state),
  homepage: fromRouting.isHomepage(state),
})

export default connect(mapStateToProps)(FooterContainer)
