import React from 'react'
import { connect } from 'react-redux'

import { countries } from 'config'
import { BurgerMenu } from 'components'
import { DropDownMenu } from 'containers'

const BurgerMenuContainer = props => (
  <DropDownMenu label="burger_menu">
    <BurgerMenu {...props} />
  </DropDownMenu>
)

BurgerMenuContainer.propTypes = {
  proHomeLink: React.PropTypes.string,
}

const mapStateToProps = state => ({ proHomeLink: countries[state.country.countryCode].proUrl })

export default connect(mapStateToProps)(BurgerMenuContainer)
