import React, { Component } from 'react'
import { connect } from 'react-redux'

import { countryConfig, defaultProUrl } from 'config'
import { BurgerMenu } from 'components'
import { DropDownMenu } from 'containers'

const BurgerMenuContainer = props => {
  return (
    <DropDownMenu label="burger_menu">
      <BurgerMenu {...props} />
    </DropDownMenu>
  )
}

BurgerMenuContainer.propTypes = {
  proHomeLink: React.PropTypes.string,
}

const mapStateToProps = state => ({ proHomeLink: countryConfig[state.country.countryCode].proUrl })

export default connect(mapStateToProps)(BurgerMenuContainer)
