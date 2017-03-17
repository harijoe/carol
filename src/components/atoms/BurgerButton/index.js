import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, merge } from 'utils/style'

const itemBurgerHeight = 2

const styles = ({ fullscreenNavigation }) => {
  let commonStyles = css`
    &, &::before, &::after {
      position: absolute;
      height: ${itemBurgerHeight}px;
      width: ${theme('spaces.m')};
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
      top: ${itemBurgerHeight * -3}px;
      transition: top .1s ease .14s, opacity .1s ease;
    }

    &::after {
      bottom: ${itemBurgerHeight * -3}px;
      transition: bottom .1s ease .14s, transform .1s cubic-bezier(.55, .055, .675, .19);
    }
  `

  if (fullscreenNavigation === true) {
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
    `)
  }

  return commonStyles
}

const StyledSpan = styled.span`${styles}`

const Wrapper = styled.span`
  height: calc(${theme('spaces.m')} * 2);
  width: calc(${theme('spaces.m')} * 2);
  z-index: 999;
  display: block;
  position: absolute;
`

const BurgerButton = ({ toggleFullscreenNavigation, fullscreenNavigation }) => (
  <Wrapper onClick={toggleFullscreenNavigation}>
    <StyledSpan fullscreenNavigation={fullscreenNavigation} />
  </Wrapper>
)

BurgerButton.propTypes = {
  toggleFullscreenNavigation: PropTypes.func.isRequired,
  fullscreenNavigation: PropTypes.bool,
}

export default BurgerButton
