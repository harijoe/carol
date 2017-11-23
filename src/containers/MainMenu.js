import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromContext, fromRouting } from 'store/selectors'

import { MainMenu } from 'components'

const MainMenuContainer = props => <MainMenu {...props} />

MainMenuContainer.propTypes = {
  locale: PropTypes.string,
  isHomepage: PropTypes.bool,
  isProHomepage: PropTypes.bool,
}

const mapStateToProps = state => ({
  locale: fromContext.getLocale(state),
  isHomepage: fromRouting.isHomepage(state),
  isProHomepage: fromRouting.isProHomepage(state),
})

export default connect(mapStateToProps)(MainMenuContainer)
