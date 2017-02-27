import React from 'react'
import { connect } from 'react-redux'

import { locales } from 'config'
import { BurgerMenu } from 'components'
import { DropDownMenu } from 'containers'
import { fromLocale } from 'store/selectors'

const BurgerMenuContainer = props => (
  <DropDownMenu label="burger_menu">
    <BurgerMenu {...props} />
  </DropDownMenu>
)

BurgerMenuContainer.propTypes = {
  proHomeLink: React.PropTypes.string,
}

const mapStateToProps = state => ({ proHomeLink: locales[fromLocale.getLocale(state)].proUrl })

export default connect(mapStateToProps)(BurgerMenuContainer)
