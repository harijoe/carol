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

  &::before, 
  &::after {
    position: absolute;
    top: 0;
    right: -1.2rem;
    height: 1.7rem;
    width: 1.2rem;
    content: '';
  }

  &::before {
    background: ${theme('colors.primary')};
  }

  &::after {
    background: ${theme('colors.white')};
    border-top-left-radius: 6rem;
  }
`

BubbleAnswer.displayName = 'BubbleAnswer'

const Answer = ({ answer }) => {
  if (answer == null) {
    return null
  }

  return (
    <Wrapper>
      <BubbleAnswer>{answer}</BubbleAnswer>
    </Wrapper>
  )
}

Answer.propTypes = {
  answer: PropTypes.string,
}

export default Answer
