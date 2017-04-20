import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Link } from 'components'

const StyledLink = styled(Link)`
  padding: 10px 0;
  color: ${theme('colors.grayscale.darker')};
  width: 100%;
  display: block;
`

const PopinMenuLink = ({ children, to }) => (
  <StyledLink to={to}>
    {children}
  </StyledLink>
)

PopinMenuLink.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
}

export default PopinMenuLink
