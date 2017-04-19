import React from 'react'
import { connect } from 'react-redux'

import { BurgerMenu } from 'components'
import { fromContext } from 'store/selectors'

const BurgerMenuContainer = props => (
  <BurgerMenu {...props} />
)

BurgerMenuContainer.propTypes = {
  locale: React.PropTypes.string,
}

const mapStateToProps = state => ({ locale: fromContext.getLocale(state) })

export default connect(mapStateToProps)(BurgerMenuContainer)
