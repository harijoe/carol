import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import injectScroll from 'hoc/component/injectScroll'
import { ifThen } from 'utils/style'

import { IconLink } from 'components'

const StyledIconLink = styled(IconLink)`${({ popinAccount }) => css`
  ${ifThen(popinAccount, `
    opacity: 0
    transition: opacity .1s;
  `, `
    opacity: 1
    transition: opacity .1s .3s;
  `)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`}`

const QuotatisLogo = ({ atTop, popinNavigation, popinAccount }) => (
  <StyledIconLink
    to="/"
    icon={!popinNavigation && atTop ? 'quotatis-white' : 'quotatis'}
    size={480}
    atTop={atTop}
    popinAccount={popinAccount}
  />
)

QuotatisLogo.propTypes = {
  atTop: PropTypes.bool,
  popinNavigation: PropTypes.bool,
  popinAccount: PropTypes.bool,
}

export default injectScroll(QuotatisLogo)
