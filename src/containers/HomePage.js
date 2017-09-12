import React from 'react'
import { connect } from 'react-redux'
import { HomePage } from 'components'
import { fromContext } from 'store/selectors'

const HomePageContainer = props => <HomePage {...props} />

const mapStateToProps = state => ({
  locale: fromContext.getLocale(state),
})

export default connect(mapStateToProps)(HomePageContainer)
