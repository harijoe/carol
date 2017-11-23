import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Image } from 'components'

const ImageWrapper = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  width: 100%;
  overflow: hidden;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${theme('colors.black')};
    opacity: 0.5;
    content: '';
    z-index: 2;
  }

  ${breakpoint('m')`
    height: 100%; 
    width: 70%;
  `}
`

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: 100%;
  margin: auto;
  object-fit: cover;
`

const StoryBackgroundImage = ({ background }) =>
  <ImageWrapper>
    <StyledImage {...background} />
  </ImageWrapper>

StoryBackgroundImage.propTypes = {
  background: PropTypes.object,
}

export default StoryBackgroundImage
