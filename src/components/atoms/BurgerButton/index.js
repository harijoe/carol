import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'utils/style'

const styles = () => {
  const itemBurgerHeight = 2

  return css`
  &, &::before, &::after{
      height: ${itemBurgerHeight}px;
      width: ${theme('spaces.m')};
      position: relative;
      background: red;
      border-radius: .5rem;

      transition-timing-function: ease;
      transition-duration: .15s;
      transition-property: transform;
  }

  top: 50%;
  left: 50%;
  margin-top:${itemBurgerHeight / -2}px;
  margin-left: calc(${theme('spaces.m')} / -2);
  right: 0;


  &::before, &::after{
    content:'';
    display:block;
  }

  &::before{
    top:${itemBurgerHeight * -3}px;
    transition: top .1s ease .14s, opacity .1s ease;
  }

  &::after{
    bottom:${itemBurgerHeight * -3}px;
    transition: bottom .1s ease .14s,transform .1s cubic-bezier(.55,.055,.675,.19);
  }
`
}

const StyledSpan = styled.span`${styles}`

const BurgerButton = () => (
  <StyledSpan />
)

export default BurgerButton
