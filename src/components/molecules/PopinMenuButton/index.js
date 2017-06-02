import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

const StyledButton = styled.button`
  background: inherit;
  border: none;
  padding: 10px 0;
  color: ${theme('colors.grayscale.darker')};
`

const PopinMenuButton = ({ children, onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    {children}
  </StyledButton>
)

PopinMenuButton.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PopinMenuButton
