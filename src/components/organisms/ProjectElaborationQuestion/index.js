import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Icon } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding-bottom: ${theme('spaces.s')};
  padding-top: ${theme('spaces.m')};
`

const StyledIcon = styled(Icon)`
  position: relative;
  z-index: 1;
  width: 3.6rem;
  height: 3.6rem;
`

const BubbleQuestion = styled.div`
  position: relative;
  margin: 0 0 0 ${theme('spaces.s')};
  padding: ${theme('spaces.s')} ${theme('spaces.m')};
  overflow-wrap: break-word;
  max-width: 70%;
  background: ${theme('colors.white')};
  border-radius: 0 1rem 1rem 1rem;
  color: ${theme('colors.black')};
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);
  white-space: pre;

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

const ProjectElaborationQuestion = ({ children, ...props }) => {
  if (children == null) {
    return null
  }

  return (
    <Wrapper {...{ ...props }}>
      <StyledIcon
        alt="quotatis"
        icon="logo"
      />
      <BubbleQuestion>{children}</BubbleQuestion>
    </Wrapper>
  )
}

ProjectElaborationQuestion.propTypes = {
  children: PropTypes.any,
}

export default ProjectElaborationQuestion
