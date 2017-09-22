import React from 'react'
import { connect } from 'react-redux'

import { CookiesBanner } from 'components'
import { fromContext } from 'store/selectors'
import { showCookiesBanner } from 'store/actions'

const CookiesBannerContainer = props => <CookiesBanner {...props} />

const mapStateToProps = state => ({ showCookiesBanner: fromContext.showCookiesBanner(state) })
const mapDispatchToProps = dispatch => ({ setCookiesBanner: show => dispatch(showCookiesBanner(show)) })

export default connect(mapStateToProps, mapDispatchToProps)(CookiesBannerContainer)
