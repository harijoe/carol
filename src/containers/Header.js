import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromRouting } from 'store/selectors'

import { Header } from 'components'

const HeaderContainer = props => (
  <Header {...props}>{props.children}</Header>
)

HeaderContainer.propTypes = {
  children: PropTypes.any,
}

const mapStateToProps = state => ({
  homepage: fromRouting.isHomepage(state),
})

export default connect(mapStateToProps)(HeaderContainer)
