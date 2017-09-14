import React from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

const Wrapper = styled.div`
  position: absolute;
  height: 5.6rem;
  top: 0; right: 0; bottom: 0; left: 0;

  > div {
    position: absolute;
    background-color: ${theme('colors.secondary')};
    top: 0;
    right: .6rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    content: '';
    animation: 1.7s cubic-bezier(0.83, 0.24, 0.28, 0.84) infinite bouncing;
  }

  @keyframes bouncing {
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(-3.8rem);
  }

  24% {
    transform: translateY(-3.2rem);
  }

  28% {
    transform: translateY(-3.8rem);
  }

  48% {
    transform: translateY(0.8rem);
  }

  52% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
}
`

const BouncingBall = () =>
  <Wrapper>
    <div />
  </Wrapper>

export default BouncingBall
