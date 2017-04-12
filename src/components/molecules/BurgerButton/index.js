import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, merge } from 'utils/style'

const itemBurgerHeight = 2

const styles = ({ isPopin }) => {
  let commonStyles = css`
    &, &::before, &::after {
      position: absolute;
      height: ${itemBurgerHeight}px;
      width: 2rem;
      background: ${theme('colors.secondary')};
      border-radius: .5rem;
      transition-timing-function: ease;
      transition-duration: .15s;
      transition-property: transform;
    }

    & {
      top: 50%;
      left: 50%;
      display: block;
      margin-top: ${itemBurgerHeight / -2}px;
      margin-left: calc(${theme('spaces.m')} / -2);
    }

    &::before, &::after {
      content: '';
      display: block;
    }

    &::before {
      top: ${itemBurgerHeight * -3.5}px;
      transition: top .1s ease .14s, opacity .1s ease;
    }

    &::after {
      bottom: ${itemBurgerHeight * -3.5}px;
      transition: bottom .1s ease .14s, transform .1s cubic-bezier(.55, .055, .675, .19);
    }
  `

  if (isPopin === true) {
    commonStyles = merge(commonStyles, css`
      & {
        transition-delay: .14s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: rotate(45deg);
      }

      &::before {
        top: 0;
        transition: top .1s ease, opacity .1s ease .14s;
        opacity: 0;
      }

      &::after {
        bottom: 0;
        transition: bottom 0.1s ease, transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.14s, -webkit-transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.14s;
        transform: rotate(-90deg);
      }

      &, &::before, &::after {
        background: ${theme('colors.grayscale.dark')};
      }
    `)
  }

  return commonStyles
}

const StyledSpan = styled.span`${styles}`

const Wrapper = styled.span`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 100;
  height: calc(2rem * 2);
  width: calc(2rem * 2);
`

const BurgerButton = ({ isPopin, togglePopinNavigation, closeAllPopin }) => (
  <Wrapper onClick={isPopin ? closeAllPopin : togglePopinNavigation}>
    <StyledSpan isPopin={isPopin} />
  </Wrapper>
)

BurgerButton.propTypes = {
  togglePopinNavigation: PropTypes.func.isRequired,
  closeAllPopin: PropTypes.func.isRequired,
  isPopin: PropTypes.bool,
}

export default BurgerButton
