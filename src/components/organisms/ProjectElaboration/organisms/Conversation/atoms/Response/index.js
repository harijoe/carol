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

const BubbleResponse = styled.p`
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
    background: ${theme('colors.grayscale.lightest')};
    border-top-left-radius: 6rem;
  }
`

BubbleResponse.displayName = 'BubbleResponse'

const Response = ({ response }) => {
  if (response == null) {
    return null
  }

  return (
    <Wrapper>
      <BubbleResponse>{response}</BubbleResponse>
    </Wrapper>
  )
}

Response.propTypes = {
  response: PropTypes.string,
}

export default Response
