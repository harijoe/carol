import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import Link from 'components/Link'

const StyledLink = styled(Link)`
  padding: ${theme('spaces.s')} 0;
  color: ${theme('colors.grayscale.darker')};
  width: 100%;
  display: block;
`

const PopinMenuLink = ({ children, to }) =>
  <StyledLink to={to}>
    {children}
  </StyledLink>

PopinMenuLink.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
}

export default PopinMenuLink
