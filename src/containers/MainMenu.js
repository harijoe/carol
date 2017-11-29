import React from 'react'
import { connect } from 'react-redux'
import { fromContext, fromRouting } from 'store/selectors'

import MainMenu from 'components/MainMenu'

const MainMenuContainer = props => <MainMenu {...props} />

const mapStateToProps = state => ({
  locale: fromContext.getLocale(state),
  isLandingPage: fromRouting.isLandingPage(state),
})

export default connect(mapStateToProps)(MainMenuContainer)
