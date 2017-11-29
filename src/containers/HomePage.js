import React from 'react'
import { connect } from 'react-redux'
import HomePage from 'pages/HomePage'
import { fromContext } from 'store/selectors'

const HomePageContainer = props => <HomePage {...props} />

const mapStateToProps = state => ({
  locale: fromContext.getLocale(state),
  lang: fromContext.getLang(state),
})

export default connect(mapStateToProps)(HomePageContainer)
