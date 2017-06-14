import React, { PropTypes } from 'react'

import { PopinWrapper } from 'components'
import { BurgerMenu, CountryMenu } from 'containers'

const PopinNavigation = ({ show }) => (
  <PopinWrapper show={show}>
    <BurgerMenu />
    <CountryMenu />
  </PopinWrapper>
)

PopinNavigation.propTypes = {
  show: PropTypes.bool,
}

export default PopinNavigation
