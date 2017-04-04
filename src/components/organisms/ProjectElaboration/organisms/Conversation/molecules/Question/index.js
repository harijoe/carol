import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, mapBreakpoints } from 'utils/style'

import { Image } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin: ${theme('spaces.m')} 0 ${theme('spaces.s')} 0;

  ${mapBreakpoints(bp => css`
    padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}
`

const StyledImage = styled(Image)`
  position: relative;
  z-index: 1;
`

const BubbleQuestion = styled.p`
  position: relative;
  margin: 0 0 0 ${theme('spaces.s')};
  padding: ${theme('spaces.s')} ${theme('spaces.m')};
  overflow-wrap: break-word;
  max-width: 70%;
  background: ${theme('colors.white')};
  border-radius: 0 1rem 1rem 1rem;
  color: ${theme('colors.black')};

  &::before, 
  &::after {
    position: absolute;
    top: 0;
    left: -1.2rem;
    height: 1.7rem;
    width: 1.2rem;
    content: '';
  }

  &::before {
    background: ${theme('colors.white')};
  }

  &::after {
    background: ${theme('colors.grayscale.lightest')};
    border-top-right-radius: 6rem;
  }
`

BubbleQuestion.displayName = 'BubbleQuestion'

const Question = ({ question }) => {
  if (question == null) {
    return null
  }

  return (
    <Wrapper>
      <StyledImage
        alt="quotatis"
        src={require('./logo.png')}
        width="32"
      />
      <BubbleQuestion>{question}</BubbleQuestion>
    </Wrapper>
  )
}

Question.propTypes = {
  question: PropTypes.string,
}

export default Question
