import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, mapBreakpoints } from 'utils/style'

const itemBurgerHeight = 1

const StyledSpan = styled.span`
  &,
  &::before,
  &::after {
    position: absolute;
    height: ${itemBurgerHeight}px;
    width: ${theme('icons.size.l')};
    background: ${theme('colors.secondary')};
    border-radius: 0.5rem;
  }

  &::before,
  &::after {
    content: '';
    display: block;
  }

  & {
    top: 50%;
    display: block;
    transform: rotate(45deg);
  }

  &::before {
    opacity: 0;
  }

  &::after {
    transform: rotate(-90deg);
  }

  &,
  &::before,
  &::after {
    background: ${theme('colors.grayscale.dark')};
  }
`

const Wrapper = styled.div`
  position: absolute;
  z-index: 50;
  height: ${theme('icons.size.l')};
  width: ${theme('icons.size.l')};
  margin: 0;
  cursor: pointer;
  ${mapBreakpoints(
    bp => css`
    top: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
    right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
  `,
  )};
`

const CloseAllButton = ({ closeAll, className }) =>
  <Wrapper className={className} onClick={closeAll}>
    <StyledSpan />
  </Wrapper>

CloseAllButton.propTypes = {
  closeAll: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default CloseAllButton
