import React from 'react'
import { connect } from 'react-redux'

import { BurgerMenu } from 'components'
import { DropDownMenu } from 'containers'
import { fromLocale } from 'store/selectors'

const BurgerMenuContainer = props => (
  <DropDownMenu label="burger_menu">
    <BurgerMenu {...props} />
  </DropDownMenu>
)

BurgerMenuContainer.propTypes = {
  locale: React.PropTypes.string,
}

const mapStateToProps = state => ({ locale: fromLocale.getLocale(state) })

export default connect(mapStateToProps)(BurgerMenuContainer)
