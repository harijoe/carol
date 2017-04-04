import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, mapBreakpoints, breakpoint } from 'utils/style'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin-top: ${theme('spaces.s')};
  margin-bottom: ${theme('spaces.m')};
  padding-right: ${theme('spaces.m')};

  ${mapBreakpoints(bp => css`
    margin-right: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}
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

  animation: bounceIn 1s;

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
    background: ${theme('colors.grayscale.lightest')};
    border-top-left-radius: 6rem;
  }

  ${breakpoint('l')`
    padding: ${theme('spaces.m')};
  `}
`

BubbleAnswer.displayName = 'BubbleAnswer'

const Response = ({ response }) => {
  if (response == null) {
    return null
  }

  return (
    <Wrapper>
      <BubbleAnswer>{response}</BubbleAnswer>
    </Wrapper>
  )
}

Response.propTypes = {
  response: PropTypes.string,
}

export default Response
