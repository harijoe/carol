import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromContext, fromRouting } from 'store/selectors'

import { MainMenu } from 'components'

const MainMenuContainer = props => (
  <MainMenu {...props} />
)

MainMenuContainer.propTypes = {
  locale: PropTypes.string,
  homepage: PropTypes.bool,
}

const mapStateToProps = state => ({
  locale: fromContext.getLocale(state),
  homepage: fromRouting.isHomepage(state),
})

export default connect(mapStateToProps)(MainMenuContainer)
