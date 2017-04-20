import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

const StyledButton = styled.button`
  background: inherit;
  border: none;
  padding: 10px 0;
  color: ${theme('colors.grayscale.darker')};
`

const PopinMenuLink = ({ children, onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    {children}
  </StyledButton>
)

PopinMenuLink.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PopinMenuLink
