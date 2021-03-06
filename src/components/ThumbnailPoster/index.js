import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, merge, breakpoint } from 'utils/style'

import Heading from 'components/Heading'
import Image from 'components/Image'

const styles = ({ height }) => {
  let baseStyle

  switch (height) {
    case 's':
      baseStyle = css`
        height: 15rem;

        ${breakpoint('m')`
          height: 22rem;
        `}
      `
      break
    case 'm':
      baseStyle = css`
        height: 22.5rem;

        ${breakpoint('m')`
          height: 30rem;
        `}
      `
      break
    default:
      baseStyle = css`
        height: 15rem;

        ${breakpoint('m')`
          height: 22rem;
        `}
      `
      break
  }

  const commonStyle = css`
    position: relative;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: ${theme('spaces.s')};
    overflow: hidden;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${theme('colors.grayscale.darkest')};
      opacity: 0.3;
      content: '';
      z-index: 1;
    }
  `

  return merge(baseStyle, commonStyle)
}

const Wrapper = styled.figure`${styles};`

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
  width: 100%;
  overflow: hidden;
  color: ${theme('colors.white')};
  text-align: center;
  text-overflow: ellipsis;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.38);
  z-index: 2;

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.xl')};
  `}
`

const ThumbnailPoster = ({ image, title, children, ...props }) =>
  <Wrapper {...props}>
    <StyledImage {...image} />
    <StyledHeading level={3}>
      {title}
    </StyledHeading>
    {children}
  </Wrapper>

ThumbnailPoster.propTypes = {
  height: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.node,
  children: PropTypes.any,
}

ThumbnailPoster.defaultProps = {
  height: 's',
}

export default ThumbnailPoster
