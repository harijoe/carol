import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, merge, breakpoint } from 'utils/style'

const itemBurgerHeight = 2

const styles = ({ isPopin }) => {
  let commonStyles = css`
    &,
    &::before,
    &::after {
      position: absolute;
      height: ${itemBurgerHeight}px;
      width: 2rem;
      background: ${theme('colors.secondary')};
      border-radius: 0.5rem;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    & {
      top: 50%;
      left: 50%;
      display: block;
      margin-top: ${itemBurgerHeight / -2}px;
      margin-left: calc(${theme('spaces.m')} / -2);
    }

    &::before,
    &::after {
      content: '';
      display: block;
    }

    &::before {
      top: ${itemBurgerHeight * -3.5}px;
      transition: top 0.1s ease 0.14s, opacity 0.1s ease;
    }

    &::after {
      bottom: ${itemBurgerHeight * -3.5}px;
      transition: bottom 0.1s ease 0.14s, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  `

  if (isPopin === true) {
    commonStyles = merge(commonStyles, css`
  & {
    transition-delay: 0.14s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(45deg);
  }

  &::before {
    top: 0;
    transition: top 0.1s ease, opacity 0.1s ease 0.14s;
    opacity: 0;
  }

  &::after {
    bottom: 0;
    transition: bottom 0.1s ease, transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.14s, -webkit-transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.14s;
    transform: rotate(-90deg);
  }

  &,
  &::before,
  &::after {
    background: ${theme('colors.secondary')};
  }
`)
  }

  return commonStyles
}

const StyledSpan = styled.span`${styles}`

const Wrapper = styled.span`
  position: relative;
  z-index: 26;
  box-sizing: content-box;
  padding: ${theme('spaces.s')};
  height: ${theme('icons.size.l')};
  width: ${theme('icons.size.l')};
  cursor: pointer;
  ${breakpoint('l')`display: none;`}
`

const BurgerButton = ({ isPopin, toggleMainNavigation, closeAll }) => (
  <Wrapper onClick={isPopin ? closeAll : toggleMainNavigation}>
    <StyledSpan isPopin={isPopin} />
  </Wrapper>
)

BurgerButton.propTypes = {
  toggleMainNavigation: PropTypes.func.isRequired,
  closeAll: PropTypes.func.isRequired,
  isPopin: PropTypes.bool,
}

export default BurgerButton
