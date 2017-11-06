import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image } from 'components'

const Wrapper = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
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
  z-index: 0;
`

const ImageWrapper = ({ image, className, ...props }) =>
  <Wrapper className={`qs-Card-image ${className}`} {...props}>
    {image != null &&
      <StyledImage {...image} />
    }
  </Wrapper>

ImageWrapper.propTypes = {
  image: PropTypes.object,
  className: PropTypes.string,
}

export default ImageWrapper
