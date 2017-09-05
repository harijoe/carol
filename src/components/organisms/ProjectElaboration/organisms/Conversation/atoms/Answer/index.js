import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  padding-top: ${theme('spaces.s')};
  padding-bottom: ${theme('spaces.m')};
  padding-right: ${theme('spaces.m')};
`

const BubbleAnswer = styled.p`
  position: relative;
  margin: 0;
  padding: ${theme('spaces.s')} ${theme('spaces.m')};
  overflow-wrap: break-word;
  max-width: 70%;
  background: ${theme('colors.primary')};
  border-radius: 1rem 0 1rem 1rem;
  color: ${theme('colors.white')};
  animation: 0.1s hide linear, 0.4s bubble linear 0.1s;

  @keyframes hide {
    from {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes bubble {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }

    80% {
      opacity: 1;
    }

    100% {
      transform: translateY(0);
    }
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    right: -1.2rem;
    width: 1.2rem;
    content: '';
    border: none; 
    outline: none;
  }

  &::before {
    height: 1.7rem;
    background: ${theme('colors.primary')};
    border: 1rem solid ${theme('colors.primary')};
  }

  &::after {
    height: 2rem;
    background: ${theme('colors.white')};
    border-top-left-radius: 6rem;
    border: 0.1rem solid ${theme('colors.white')};
  }
`

BubbleAnswer.displayName = 'BubbleAnswer'

const Answer = ({ answer }) => {
  if (answer == null) {
    return null
  }

  return (
    <Wrapper>
      <BubbleAnswer>
        {answer}
      </BubbleAnswer>
    </Wrapper>
  )
}

Answer.propTypes = {
  answer: PropTypes.string,
}

export default Answer
