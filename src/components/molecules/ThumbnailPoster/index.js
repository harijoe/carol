import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'
import { Heading, Image } from 'components'

const Wrapper = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${theme('spaces.s')};
  height: 15rem;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${theme('colors.grayscale.darkest')};
    opacity: 0.30;
    content: '';
    z-index: 1;
  }
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

const StyledHeading = styled(Heading)`
  position: relative;
  margin: 0;
  color: ${theme('colors.white')};
  text-shadow: 0 1px 0 rgba(0,0,0, .38);
  z-index: 2;
`

const ThumbnailPoster = ({ categoryImage, categoryTitle }) => (
  <Wrapper>
    <StyledImage link={categoryImage} />
    <StyledHeading level={3}>{categoryTitle}</StyledHeading>
  </Wrapper>
)

ThumbnailPoster.propTypes = {
  categoryImage: PropTypes.string,
  categoryTitle: PropTypes.string,
}

export default ThumbnailPoster
